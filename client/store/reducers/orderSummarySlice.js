import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOrderSummary = createAsyncThunk(
  "orderSummary",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/orders/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const orderSummarySlice = createSlice({
  name: "orderSummary",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrderSummary.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const orderSummaryState = (state) => {
  return state.orderSummary;
};

export default orderSummarySlice.reducer;
