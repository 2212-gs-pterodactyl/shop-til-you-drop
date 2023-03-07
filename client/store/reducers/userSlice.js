// ## JW
import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
/* These thunks will make ASYNC calls to our server to fetch our data.*/
export const fetchOneUserAsync = createAsyncThunk(
  'users/fetchOne',
  async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`)
      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const editUserAsync = createAsyncThunk(
  "users/editOne",
  async ({ firstName, lastName, email, password, address, id }) => {
    const { data } = await axios.put(`/api/users/${id}`, {
      firstName,
      lastName,
      email,
      password,
      address,
      id,
    });
    return data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneUserAsync.fulfilled, (state, action) => {

      return action.payload;
    });
    builder.addCase(editUserAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
})

/* This is a function we will pass to useSelector in our component,
to read values from our specific slice of redux state. */
export const selectUser = (state) => state.user
// this is the same "user" that is stuck to the name property in userSlice.

export default userSlice.reducer
