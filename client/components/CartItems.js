import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectCart, fetchCartAsync } from '../store/reducers/cartSlice'

const CartItems = () => {
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  const { cartItems } = cart
  const id = useSelector((state) => state.auth.id)

  console.log(cart)
  const getCartTotal = (cartItems) => {
    let sum = 0
    cartItems.map((elem) => {
      sum += elem.price * elem.qty
    })

    return sum
  }

  useEffect(() => {
    dispatch(fetchCartAsync(id))
  }, [dispatch])

  return (
    <div>
      {console.log('inside return', cart)}
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <h3>Name:{item.product.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>
            </li>
          )
        })}
        {/* <h3>Total: ${getCartTotal(cart)}</h3> */}
      </ul>
    </div>
  )
}

export default CartItems
