import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../store/reducers/singleProductSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const product = useSelector(selectSingleProduct);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  console.log(product);
  if (!product.name) return <h2>Loading.....</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img_URL}></img>
      <div> Price: {product.price} </div>
      <div> Size: {product.size}</div>
      <div> Type: {product.type}</div>
      <div> Description: </div>
      <p> {product.description} </p>
    </div>
  );
};

export default SingleProduct;
