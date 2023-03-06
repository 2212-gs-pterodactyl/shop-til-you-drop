import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { selectCart, fetchCartAsync } from "../store/reducers/cartSlice";





const CartItems = () => {
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)
    const {cartItems} = cart
    const id = useSelector((state) => state.auth.id)


    const getCartTotal = (cartItems) => {
      let sum = 0
      cartItems.map(elem => {
        sum += (elem.price * elem.qty) 
      })
      //console.log(cartPrices)
      return sum;
    }
    // setTotal(getCartTotal(cartItems))

    // useEffect(() => {
    //   dispatch(fetchCartAsync())
    // }, [dispatch])

    
    return (
        <div>
        
        <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {/* <img src={item.image} alt={item.name} /> */}
            <div>
              <h3>Name: {item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Qty: {item.qty}</p>

            </div>
          </li>
        ))}
         <h3>Total: ${getCartTotal(cartItems)}</h3>
      </ul>
      {/* <button onClick={handleClearCart}>Clear Cart</button> */}
          {/* <button onClick={placeOrder}>Place Order</button> */}
        </div>
      );
} 

export default CartItems;