import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchAllProducts = createAsyncThunk(
  'products/getAll',
  async () => {
    const { data } = await axios.get('http://localhost:8080/api/products')
    return data
  }
)
export const fetchSingleProduct = createAsyncThunk(
  'products/getOne',
  async (id) => {
    const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
    return data
  }
)
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    allProducts: [],
    singleProduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.allProducts = payload
    })
    builder.addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
      state.singleProduct = payload
    })
  },
})
export const selectProducts = (state) => state.allProducts
export const selectSingleProduct = (state) => state.singleProduct
export default productsSlice.reducer
