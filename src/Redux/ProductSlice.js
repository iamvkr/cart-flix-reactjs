import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: {
        "products": [],
        "total": 0,
        "skip": 0,
        "limit": 0
    },
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addItems: (state, action) => {
            // action.payload will be an object containing items and extra details
            state.items.products = state.items.products.concat(action.payload.products);
            state.items.total = action.payload.total;
            state.items.skip = action.payload.skip;
            state.items.limit = action.payload.limit;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItems } = ProductSlice.actions

export default ProductSlice.reducer