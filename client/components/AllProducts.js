import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchAllProducts,
  selectProducts,
} from '../store/reducers/productsSlice'
// import { Link } from 'react-router-dom'

function AllProducts() {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])
  console.log('products', products)
  return (
    <>
      <div>AllProducts</div>
      <ul>
        {products.map((product) => (
          <div>
            <li>Name:{product.name}</li>
            <li>Description:{product.description}</li>
            <li>Price:{product.price}</li>
          </div>
        ))}
      </ul>
    </>
  )
}

export default AllProducts
