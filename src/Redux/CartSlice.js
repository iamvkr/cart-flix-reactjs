import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const item_index = state.cartItems.findIndex(item => item.id == product.id);
            if (item_index < 0) {
                console.log("added new");
                // cart do not conatin product with this id, so add in cart with quantity = 1
                state.cartItems = [...state.cartItems, { ...product, quantity: 1 }];
                // return true;
            } else {
                console.log("increased++");
                // else when product already exist in cart, increase quantity of item
                state.cartItems = state.cartItems.map((item, i) => {
                    if (item.id == (item_index + 1)) {
                        console.log(item_index);
                        return { ...item, quantity: (item.quantity + 1) };
                    }
                    console.log(item_index,item.id);
                    return item;
                });
                console.log(state.cartItems);
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload.id;
            const item = state.cartItems.find(item => item.id == productId);
            // console.log(item);
            // first check quantity of product:
            if (item.quantity <= 1) {
                // remove product completely
                state.cartItems = state.cartItems.filter(item => item.id !== productId);
            }else{
                // reduce quantity:
                state.cartItems = state.cartItems.map((item, i) => {
                    if (item.id == productId) {
                        // console.log("done");
                        return { ...item, quantity: (item.quantity - 1) };
                    }
                    return item;
                })
            }
        },
    }

})

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;