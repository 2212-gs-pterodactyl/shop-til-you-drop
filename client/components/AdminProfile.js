import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllOrders, selectOrders } from '../store/reducers/orderSlice'
import { fetchAllUsersAsync, selectUser } from '../store/reducers/userSlice'
import { fetchAllProducts, selectProducts} from '../store/reducers/productsSlice'



function AdminProfile() {
  const dispatch = useDispatch()
  const orders = useSelector(selectOrders)
  const users = useSelector(selectUser)
  const products = useSelector(selectProducts)

  console.log("ORDER====>",orders)
  console.log("USER====>",users)
  console.log("PRODUCT====>", products)

  const id = useSelector((state) => state.auth.id)

  useEffect(() => {
    dispatch(fetchAllUsersAsync())
    dispatch(fetchAllOrders())
    dispatch(fetchAllProducts())
  }, [dispatch])

	if (!users.length) return "Loading. Please wait";
  return (
    <div>     
      <h2>USERS</h2>
      <table>
      {users.map((user)=>{
        return (
          <>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.address}</td>
        </tr>
        </>
        )
      })}
      </table>
      <h2>PRODUCTS</h2>
      <table>
      {products.map((product)=>{
        return (
          <>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Iventory</th>
          <th>Image</th>
          <th>Type</th>
        </tr>
        <tr>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td>{product.inventory}</td>
          <td>{product.img_URL}</td>
          <td>{product.type}</td>
        </tr>
        </>
        )
      })}
      </table>
      <h2>ORDERS</h2>
      <table>
      {orders.map((order)=>{
        return (
          <>
        <tr>
          <th>Total Price</th>
          <th>Shipping Info</th>
          <th>Payment Info</th>
        </tr>
        <tr>
          <td>{order.totalPrice}</td>
          <td>{order.shippingInfo}</td>
          <td>{order.paymentInfo}</td>
        </tr>
        </>
        )
      })}
      </table>
    </div>
  )
}

export default AdminProfile
