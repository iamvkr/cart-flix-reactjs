import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: {
        "products": [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/1/1.jpg",
                    "https://cdn.dummyjson.com/product-images/1/2.jpg",
                    "https://cdn.dummyjson.com/product-images/1/3.jpg",
                    "https://cdn.dummyjson.com/product-images/1/4.jpg",
                    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
                "images": [
                    "https://cdn.dummyjson.com/product-images/2/1.jpg",
                    "https://cdn.dummyjson.com/product-images/2/2.jpg",
                    "https://cdn.dummyjson.com/product-images/2/3.jpg",
                    "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
                ]
            }
        ],
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