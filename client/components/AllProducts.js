import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchAllProducts,
  selectProducts,
} from '../store/reducers/productsSlice'

function AllProducts() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)
  const cart = useSelector((state) => state.cart)
  console.log('cart state-->', cart)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <>
      <div>All Products</div>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <div>Name:{product.name}</div>
            <div>Description:{product.description}</div>
            <div>Price:{product.price}</div>
            <img src={product.img_URL}></img>
          </Link>

          <button onClick={() => alert('Added to Cart')}>Add to Cart</button>
        </div>
      ))}
    </>
  )
}

export default AllProducts
