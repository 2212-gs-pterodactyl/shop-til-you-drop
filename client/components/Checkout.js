import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [total, setTotal] = useState(0)
  const cart = useSelector((state) => state.cart)
  console.log('THIS IS CART ITEMS', cart)

  let newTotal = 0

  const updateTotal = (price, qty) => {
    let product = price * qty
    newTotal += product
  }

  useEffect(() => {
    setTotal(newTotal)
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col md={8} className="ml-3">
            <h1>Checkout</h1>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="shippingInfo"
                style={{ width: '90%' }}
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
                <Form.Label>Last Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" />
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="Enter State" />
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter Zip Code" />
              </Form.Group>
              <Link to="/ordersummary">
                <Button variant="primary" type="submit">
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
  )
}

export default Checkout
