import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../Redux/CartSlice';


const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, curr) => ( ((acc * 100) + ((curr.price * 100)  * curr.quantity))/100), 0);

  // const [cart, setCart] = useState([]);
  // const products = [
  //   { id: 1, name: 'Product 1', price: 10 },
  //   { id: 2, name: 'Product 2', price: 20 },
  //   { id: 3, name: 'Product 3', price: 30 },
  // ];

  const handleIncrease = (item) => {
    dispatch(addToCart(item))
  }

  const handleDecrease = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div className="flex justify-center mx-2">
      <div className="max-w-md w-96 bg-white rounded-lg overflow-hidden shadow-lg ">
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold text-gray-800">Your Cart {cartItems.length <= 0 && "is Empty!!"}</h2>
        </div>
        <div className="border-t border-gray-200">
          {/* <ul> */}
          {/* {cartItems.map((item, i) => {
              return (<li key={i} className="flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                  <img src={item.thumbnail} alt="Product" className="h-10 w-10 rounded-full object-cover" />
                  <span className="ml-2 text-sm font-medium text-gray-700">{item.title}</span>
                </div>
                <div>
                  <span className="p-2 cursor-pointer font-bold border-zinc-800 text-sm  text-gray-700"
                    onClick={() => { handleDecrease(item) }}>-</span>
                  <span className="p-2 cursor-pointer font-bold border-zinc-800 text-sm  text-gray-700">{item.quantity}</span>
                  <span className="p-2 cursor-pointer font-bold border-zinc-800 text-sm  text-gray-700"
                    onClick={() => { handleIncrease(item) }}>+</span>
                </div>
                <span className="text-sm font-medium text-gray-700">${item.price}</span>
              </li>)
            })} */}
          {/* <div class="grid grid-cols-3">
              <div>
                Name
              </div>
              <div>
                + and -
              </div>
              <div>
                Price
              </div>
            </div> */}
            {cartItems.map((item, i) => {
              return (
                <div key={i} class="flex items-center justify-center my-2">


                  <div className='w-[50%]'>
                    <div className="flex items-center ps-2">
                      <img src={item.thumbnail} alt="Product" className="h-10 w-10 rounded-full object-cover" />
                      <span className="ml-2 text-sm font-medium text-gray-700">{item.title}</span>
                    </div>
                  </div>


                  <div className='w-[30%]'>
                    <span className="p-2 cursor-pointer font-bold border-zinc-800 text-sm  text-gray-700"
                      onClick={() => { handleDecrease(item) }}>-</span>
                    <span className="p-2 cursor-pointer font-bold border-zinc-800 text-sm  text-gray-700">{item.quantity}</span>
                    <span className="p-2 cursor-pointer font-bold border-zinc-800 text-sm  text-gray-700"
                      onClick={() => { handleIncrease(item) }}>+</span>
                  </div>

                  <div className='w-[20%]'>
                    <div className="text-sm font-medium text-gray-700 ">${item.price}</div>
                  </div>


            </div>
              )
            })}
            {/* <div class="col-span-5">  Content for first column
            </div>
            <div class="col-span-3">  Content for second column
            </div>
            <div class="col-span-2">  Content for third column
            </div> */}

          {/* <!-- More list items for other products --> */}
          {/* </ul> */}
        </div>
        {cartItems.length > 0 &&
          <div className="px-4 py-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-lg font-semibold text-gray-800">${total}</span>
            </div>
            <button className="block w-full bg-[var(--theme-bgcolor)] hover:bg-[var(--theme-hoverbgcolor)] text-white font-semibold py-2 px-4 mt-4 rounded">
              Checkout
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Cart