import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCart = createAsyncThunk("cart", async ()=>{
    try {
        const {data} = await axios.get("/api/orders")
        console.log("DATA", data)
        return data;
    } catch (error) {
        console.log(error)
    }
})


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchCart.fulfilled, (state, action) => {
			return action.payload;
		});
    }

})

export const selectCart = (state) => {
    return state.cart;
}

export default cartSlice.reducer;