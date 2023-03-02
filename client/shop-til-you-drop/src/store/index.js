import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice'
import productsSlice from './reducers/productsSlice'
import userSlice from './reducers/userSlice'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    products: productsSlice,
  },
})

export default store
