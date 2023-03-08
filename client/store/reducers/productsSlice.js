import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAllProducts = createAsyncThunk(
  'products/getAll',
  async () => {
    try {
      const { data } = await axios.get('/api/products')
      return data
    } catch (error) {
      console.log(error)
    }
  }
)
export const fetchSingleProduct = createAsyncThunk(
  'products/getOne',
  async (id) => {
    const { data } = await axios.get(`/api/products/${id}`)
    return data
  }
)

export const addProductAsync = createAsyncThunk(
  'products/add',
  async ({ name, description, price, inventory, size, img_URL, type }) => {
    const { data } = await axios.post('/api/products', {
      name: name,
      description: description,
      price: price,
      inventory: inventory,
      size: size,
      img_URL: img_URL,
      type: type,
    })
    return data
  }
)

export const editProductAsync = createAsyncThunk(
  'products/update',
  async ({ id, name, description, price, inventory, size, img_URL, type }) => {
    const { data } = await axios.put(`/api/products/${id}`, {
      name: name,
      description: description,
      price: price,
      inventory: inventory,
      size: size,
      img_URL: img_URL,
      type: type,
    })
    return data
  }
)

export const deleteProductAsync = createAsyncThunk(
  'products/delete',
  async ({ id }) => {
    const { data } = await axios.delete(`/api/products/${id}`)
    return data
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      return payload
    })
    builder.addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
      state.singleProduct = payload
    })
    builder.addCase(addProductAsync.fulfilled, (state, { payload }) => {
      state.push(payload)
    })
    builder.addCase(editProductAsync.fulfilled, (state, { payload }) => {
      return payload
    })
    builder.addCase(deleteProductAsync.fulfilled, (state, { payload }) => {
      return state
    })
  },
})
export const selectProducts = (state) => state.products

export default productsSlice.reducer
