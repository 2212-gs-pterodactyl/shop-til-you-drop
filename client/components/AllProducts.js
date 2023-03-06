import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchAllProducts,
  selectProducts,
} from '../store/reducers/productsSlice'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { selectCart, addToCartAsync } from '../store/reducers/cartSlice'
// import { selectUser } from '../store/reducers/userSlice'

function AllProducts() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const id = useSelector((state) => state.auth.id)
  // const user = useSelector(selectUser)

  console.log('id--->', id)
  const cart = useSelector((state) => state.cart)
  console.log('cart state-->', cart)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      <h1 className="text-center mb-5">All Products</h1>
      <Container>
        <Row>
          {products.map((product) => (
            <Col xs={3} className="mb-5" key={product.id}>
              <Card className="all-prod" style={{ width: '18rem' }}>
                <Link
                  to={`/products/${product.id}`}
                  className="stretched-link"
                ></Link>
                <Card.Img variant="top" src={product.img_URL} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <div>Size: {product.size}</div>
                    <div>Price: ${product.price}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Button
                className="mt-3"
                variant="info"
                onClick={() =>
                  dispatch(
                    addToCartAsync({
                      name: product.name,
                      price: product.price,
                      qty: 1,
                      id: id,
                    })
                  )
                }
              >
                Add to Cart
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default AllProducts
