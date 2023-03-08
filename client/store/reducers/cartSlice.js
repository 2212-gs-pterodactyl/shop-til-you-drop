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

export const deleteItemAsync = createAsyncThunk(
	"item/delete",
	async ({ id }) => {
		try {
			const { data } = await axios.delete(`/api/orders/cart/${id}`);
			return data;
		} catch (error) {
			console.log(err);
		}
	}
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCartAsync.fulfilled, (state, { payload }) => {
      state.push(payload)
    })
    builder.addCase(fetchCartAsync.fulfilled, (state, { payload }) => {
      return payload
    })
    builder.addCase(deleteItemAsync.fulfilled, (state, {payload}) => {
			return state.filter((item) => item.id !== payload.id);
		});
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const selectCart = (state) => state.cart

export default cartSlice.reducer
