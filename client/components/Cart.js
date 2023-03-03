import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchCart, selectCart } from "../store/reducers/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const cart = useSelector(selectCart)

    useEffect(()=>{
        dispatch(fetchCart())
    }, [dispatch])

    if (!cart.length) return "Loading. Please wait"

    return (
        <div>
            {cart.map((cartInfo)=>(
                <div>
                    <h1>Order for {cartInfo.user.fullname}</h1>
                    <p>{cartInfo.totalPrice}</p>
                </div>
            ))
            }
        </div>
    )
} 

export default Cart;