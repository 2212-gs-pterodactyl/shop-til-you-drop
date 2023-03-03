import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../store/reducers/productsSlice";

const singleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;

  //****** TODO *******

  // SINGLE PRODUCT SLICE
  // - single product state
  // - fetchSingleProduct (async thunk)
  // - product count state
  // - change product count reducer

  // ADD TO CART COMPONENENT

  //for displaying single product information
  const product = useSelector(selectSingleProduct);
  console.log(product)

  //for count state of product quantity b4 adding to car--> default Quantity: 1

  //for + / - button on quantity of item to add to cart
  //   const handleIncrement = () => {
  //     dispatch(changeProductCount(1));
  //   };
  //   const handleDecrement = () => {
  //     dispatch(changeProductCount(-1));
  //   };

  // initial state loading purposes
  // fetches singleProduct by id and render all information
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  if (!product.name) return <h2>Loading.....</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image_URL} />

      <div> Price: {product.price} </div>
      <div> Size: {product.size}</div>
      <div> Type: {product.type}</div>
      <div> Description: </div>
      <p> {product.description} </p>

      <div>
        {/* Select Quantity: {count}
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button> */}
      </div>

      {/* 
Still needed:

<AddToCart /> button???

*/}
    </div>
  );
};

export default singleProduct;
