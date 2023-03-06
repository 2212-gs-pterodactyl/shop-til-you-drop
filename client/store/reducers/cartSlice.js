// import axios from "axios";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchCart = createAsyncThunk("cart", async ()=>{
//     try {
//         const {data} = await axios.get("/api/orders")
//         return data;
//     } catch (error) {
//         console.log(error)
//     }
// })


// const cartSlice = createSlice({
//     name: "cart",
//     initialState: [],
//     reducers:{},
//     extraReducers: (builder)=>{
//         builder.addCase(fetchCart.fulfilled, (state, action) => {
// 			return action.payload;
// 		});
//     }

// })

// export const selectCart = (state) => {
//     return state.cart;
// }

// export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cart')) || [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, name, image, price, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.splice(state.indexOf(existingItem), 1);
      } else {
        existingItem.quantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: state => {
      state.splice(0, state.length);
      localStorage.removeItem('cart');
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;