import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: []
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state, action)=>{
            const product = action.payload;
            let idx = -1;
            // loop into cart items and check if this product exist or not:
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === product.id) {
                    idx = i;
                    break;
                }
            }
            if (idx < 0) {
                // console.log("product doesnot exist"); // so push the product:
                const copyProduct = {...product,quantity:1}
                state.cartItems.push(copyProduct)
            }else{
                // console.log("product exist in cart at",idx); // so increase quantity:
                state.cartItems[idx].quantity +=1 
            }
        },
        removeFromCart :(state, action)=>{
            const productId = action.payload.id;
            let idx = -1;
            // loop into cart items and get index of this product:
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].id === productId) {
                    idx = i;
                    break;
                }
            }
            // so now we have find the product in cart at index idx 
            // first check quantity of product:
            if (state.cartItems[idx].quantity <= 1) {
                // remove product completely
                state.cartItems.splice(idx,1)
            }else{
                // reduce quantity:
                state.cartItems[idx].quantity -= 1;
            }
        },
    }

})

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;