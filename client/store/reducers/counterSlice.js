import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    changeCounter(state, { payload }) {
      state += payload;
      if (state < 1) {
        state = 1;
      }
      return state;
    },
  },
});

export const { changeCounter } = counterSlice.actions;
export const counterState = (state) => state.counter;

export default counterSlice.reducer;
