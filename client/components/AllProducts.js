import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllProducts,
  selectProducts,
} from "../store/reducers/productsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { addToCartAsync } from "../store/reducers/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import Filter from "./Filter";

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const id = useSelector((state) => state.auth.id);

  const notify = (name) => {
    toast.success(`Added ${name} to your cart.`, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <h1 className="text-center mb-5">All Products</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={3} className="mb-5" key={product.id}>
              <Card className="all-prod" style={{ width: "18rem" }}>
                <Link
                  to={`/products/${product.id}`}
                  className="stretched-link"
                ></Link>
                <Card.Img variant="top" src={product.img_URL} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <div>Size: {product.size}</div>
                  <div>Price: ${product.price}</div>
                </Card.Body>
              </Card>

              <Button
                className="mt-3"
                variant="info"
                onClick={() => {
                  dispatch(
                    addToCartAsync({
                      name: product.name,
                      price: product.price,
                      qty: 1,
                      id: id,
                    })
                  );
                  notify(product.name);
                }}
              >
                Add to Cart
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}

export default AllProducts;
