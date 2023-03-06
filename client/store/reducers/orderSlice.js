import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAllOrders = createAsyncThunk(
  'orders/getAll',
  async () => {
    try {
      const { data } = await axios.get('/api/orders')
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
// export const fetchSingleOrder = createAsyncThunk(
//   'orders/getOne',
//   async (id) => {
//     const { data } = await axios.get(`/api/orders/${id}`)
//     return data
//   }
// )

export const addOrderAsync = createAsyncThunk(
  'orders/add',
  async ({ totalPrice, shippingInfo, paymentInfo, userId}) => {
    const { data } = await axios.post('/api/orders', {
      totalPrice:totalPrice,
      shippingInfo:shippingInfo,
      paymentInfo:paymentInfo,
      userId:userId
    })
    return data
  }
)

// export const editOrderAsync = createAsyncThunk(
//   'orders/update',
//   async ({ id, totalPrice, shippingInfo, paymentInfo  }) => {
//     const { data } = await axios.put(`/api/products/${id}`, {
//         totalPrice:totalPrice,
//         shippingInfo:shippingInfo,
//         paymentInfo:paymentInfo,
//     })
//     return data
//   }
// )

export const deleteOrderAsync = createAsyncThunk(
  'orders/delete',
  async ({ id }) => {
    const { data } = await axios.delete(`/api/or/${id}`)
    return data
  }
)

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrders.fulfilled, (state, { payload }) => {
      return payload
    })
    builder.addCase(addOrderAsync.fulfilled, (state, { payload }) => {
      state.push(payload)
    })
    // builder.addCase(editOrderAsync.fulfilled, (state, { payload }) => {
    //   return state
    // })
    builder.addCase(deleteOrderAsync.fulfilled, (state, { payload }) => {
      return state
    })
  },
})
export const selectOrders = (state) => state.orders

export default ordersSlice.reducer