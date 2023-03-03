import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/getOne",
  async (id) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  }
);

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectSingleProduct = (state) => state.singleProduct;
export default singleProductSlice.reducer;
