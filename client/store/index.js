import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice'
import userSlice from './reducers/userSlice'
import productsSlice from './reducers/productsSlice'
import auth from './auth'

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    user: userSlice,
  },
})

export default store
export * from './auth'
