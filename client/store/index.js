import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import userSlice from "./reducers/userSlice";
import productsSlice from "./reducers/productsSlice";
import singleProductsSlice from "./reducers/singleProductSlice";
import auth from "./auth";
import orderSummarySlice from "./reducers/orderSummarySlice";
import counterSlice from "./reducers/counterSlice";
import orderSlice from "./reducers/orderSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    user: userSlice,
    auth: auth,
    singleProduct: singleProductsSlice,
    orderSummary: orderSummarySlice,
    counter: counterSlice,
    orders: orderSlice,
  },
});

export default store;
export * from "./auth";
