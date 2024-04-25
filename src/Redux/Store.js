import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from './ProductSlice'
import cartReducer from './CartSlice'

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart:cartReducer
  },
})