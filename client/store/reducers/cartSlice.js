import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// const initialState = {
//   cartItems: JSON.parse(localStorage.getItem('cart')) || [],
//   cartTotal: 0,
//   amount: 0,
// }

export const fetchCartAsync = createAsyncThunk('cart/get', async (id) => {
  try {
    const { data } = await axios.get(`/api/orders/cart/${id}`)
    console.log('data inside thunk', data)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const addToCartAsync = createAsyncThunk(
  'cart/add',
  async ({ productId, price, qty, id }) => {
    try {
      const { data } = await axios.post(`/api/orders/cart/${id}`, {
        productId: productId,
        price: price,
        qty: qty,
      })
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, { payload }) => {
      console.log('payload from addToCartAsync', payload)
      state.push(payload)
    })
    builder.addCase(fetchCartAsync.fulfilled, (state, { payload }) => {
      console.log('payload', payload)
      console.log('state.cart', state.cart)
      return payload
    })
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const selectCart = (state) => state.cart

export default cartSlice.reducer
