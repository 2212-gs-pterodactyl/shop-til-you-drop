import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart);
  console.log("THIS IS CART ITEMS", cart);
  const id = useSelector((state) => state.auth.id);

  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [orderState, setOrderState] = useState("cart");

  let newTotal = 0;

  const updateTotal = (price, qty) => {
    let product = price * qty;
    newTotal += product;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setOrderState("completed");
    let shippingArray = [];
    shippingArray.push(address, country, zip, state);
    let shippingInfo = shippingArray.join(", ");

    dispatch(createCampusAsync({ orderState, shippingInfo, total, id }));
    setZip("");
    setAddress("");
    setState("");
    setCountry("");
  };

  useEffect(() => {
    setTotal(newTotal);
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col md={8} className="ml-3">
            <h1>Checkout</h1>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="shipInfo"
                style={{ width: "90%" }}
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(evt) => setAddress(evt.target.value)}
                />
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Country"
                  value={country}
                  onChange={(evt) => setCountry(evt.target.value)}
                />
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter State"
                  value={state}
                  onChange={(evt) => setState(evt.target.value)}
                />
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Zip Code"
                  value={zip}
                  onChange={(evt) => setZip(evt.target.value)}
                />
              </Form.Group>
              <Link to="/ordersummary">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Checkout
                </Button>
              </Link>
            </Form>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Header>Your Cart </Card.Header>
              <ListGroup className="list-group-flush">
                {cart.map((product) => (
                  <ListGroup.Item key={product.id}>
                    <div className="d-flex mb-2 justify-content-between">
                      {product.name}
                      <Badge pill className="mb-1" bg="warning">
                        <div>Price: ${product.price}</div>
                      </Badge>
                    </div>
                    <div>Quantity: {product.qty}</div>
                    {updateTotal(product.price, product.qty)}
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>Total: ${total}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
