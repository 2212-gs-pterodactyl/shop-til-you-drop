import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* These thunks will make ASYNC calls to our server to fetch our data.*/
export const fetchOneUserAsync = createAsyncThunk(
  "users/fetchOne",
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/users/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneUserAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

/* This is a function we will pass to useSelector in our component,
to read values from our specific slice of redux state. */
export const selectUser = (state) => {
  return state.user;
  // this is the same "user" that is stuck to the name property in userSlice.
};

export default userSlice.reducer;
