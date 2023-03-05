import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../store/reducers/singleProductSlice";
import { changeCounter, counterState } from "../store/reducers/counterSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;
  const product = useSelector(selectSingleProduct);
  const count = useSelector(counterState);

  const increment = () => {
    dispatch(changeCounter(1));
  };
  const decrement = () => {
    dispatch(changeCounter(-1));
  };

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

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
      <div>Select Quantity: {count} </div>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      <button onClick={() => alert(`Added ${count} ${product.name} to Cart`)}>
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
