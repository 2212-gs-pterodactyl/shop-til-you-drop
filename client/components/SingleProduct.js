import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../store/reducers/singleProductSlice";
import { changeCounter, counterState } from "../store/reducers/counterSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

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
    <Container>
      <h2>
        <Link to="/products">Products</Link> / {product.type} / {product.name}
      </h2>
      <Row>
        <Col md={6} className="mb-5">
          <Card className="m-3">
            <Card.Img className="p-2" variant="top" src={product.img_URL} />
            <Card.Body>
              <div className="d-flex justify-content-around">
                <a className="m-4">
                  <Card.Img className="all-prod" src={product.img_URL} />
                </a>
                <a className="m-4">
                  <Card.Img className="all-prod" src={product.img_URL} />
                </a>
                <a className="m-4">
                  <Card.Img className="all-prod" src={product.img_URL} />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-5">
          <Card className="h-4000">
            <Card.Header>
              <div className="d-flex mb-2 justify-content-between">
                {product.name}
                <div>Price: ${product.price}</div>
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <Badge pill className="mb-1" bg="warning">
                  <div>Size: {product.size}</div>
                </Badge>
                <div>Type: {product.type} Plant</div>
              </Card.Title>
              <Card.Text className="text-secondary">
                {product.description}
              </Card.Text>
              <div className="d-flex mb-2 justify-content-between">
                <a>
                  <Button
                    className="m-1"
                    variant="outline-dark"
                    size="sm"
                    onClick={increment}
                  >
                    {" "}
                    +{" "}
                  </Button>
                  Quantity: {count}
                  <Button
                    className="m-1"
                    variant="outline-dark"
                    size="sm"
                    onClick={decrement}
                  >
                    {" "}
                    -
                  </Button>
                </a>

                <Button
                  variant="info"
                  onClick={() =>
                    alert(`Added ${count} ${product.name} to Cart`)
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default SingleProduct;
