import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const addToCart = (product) => {
    const item_index = cart.findIndex(item => item.id == product.id);
    if (item_index < 0) {
      // cart do not conatin product with this id, so add in cart with quantity = 1
      setCart([...cart, { ...product, quantity: 1 }]);
      return true;
    }
    // else when product already exist in cart, increase quantity of item
    setCart(cart.map((item, i) => {
      if (item.id == (item_index + 1)) {
        console.log(item_index);
        return { ...item, quantity: (item.quantity + 1) };
      }
      return item;
    }))
  };

  const removeFromCart = (productId) => {
    const item = cart.find(item => item.id == productId);
    console.log(item);
    // first check quantity of product:
    if (item.quantity <= 1) {
      // remove product complete
      setCart(cart.filter(item => item.id !== productId));
      return true;
    }
    // reduce quantity:
    setCart(cart.map((item, i) => {
      if (item.id == productId) {
        console.log("done");
        return { ...item, quantity: (item.quantity - 1) };
      }
      return item;
    }))
  };

  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} : ${product.price}
            <button className='p-2 border-2 m-2 border-black' onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id + "C"}>
            {item.name} : ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* {JSON.stringify(cart)} */}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart