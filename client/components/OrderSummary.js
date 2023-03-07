import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchOrderSummary,
//   orderSummaryState,
// } from "../store/reducers/orderSummarySlice";

const OrderSummary = () => {
  // const dispatch = useDispatch();
  // const params = useParams();
  // const id = params.id;
  // const order = useSelector(orderSummaryState);
  // useEffect(() => {
  //   dispatch(fetchOrderSummary(id));
  // }, [dispatch]);

  return (
    <div>
      <h1>Thank You For Your Order!!! c:</h1>
      <div>Your Total Was: $9999.</div>

      <div>Your order is being shipped to: XXXXXXXXX .</div>
    </div>
  );
};

export default OrderSummary;
