import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  cartTotal: 0,
  amount: 0,
}

export const addToCartAsync = createAsyncThunk(
  'cart/add',
  async ({ name, price, qty, id }) => {
    try {
      const { data } = await axios.post(`/api/carts/${id}`, {
        name: name,
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
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price } = action.payload
      const existingItem = state.find((item) => item.id === id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.push({ id, name, image, price, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload
      const existingItem = state.find((item) => item.id === id)
      if (existingItem.quantity === 1) {
        state.splice(state.indexOf(existingItem), 1)
      } else {
        existingItem.quantity -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },
    clearCart: (state) => {
      state.splice(0, state.length)
      localStorage.removeItem('cart')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, { payload }) => {
      state.cartItems.push(payload)
    })
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const selectCart = (state) => state.cart

export default cartSlice.reducer
