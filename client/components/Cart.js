import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";

// import { fetchCart, selectCart } from "../store/reducers/cartSlice";
import { addToCart, removeFromCart, clearCart } from '../store/reducers/cartSlice';




const Cart = () => {
    // const [cartProducts, setCartProducts] = useState([]);
    // useEffect(() => {
    //     const storedCartProducts = localStorage.getItem('cartProducts');
    //     if (storedCartProducts) {
    //       setCartProducts(JSON.parse(storedCartProducts));
    //     }
    //   }, []);

    //   useEffect(() => {
    //     localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    //   }, [cartProducts]);

    // const dispatch = useDispatch();
    // // const navigate = useNavigate();
    // const cart = useSelector(selectCart)

    // const addToCart = (product) => {
    //     const item = {
    //       name: product.name,
    //       price: product.price,
    //       quantity: 1,
    //       image: product.image
    //     };
    //     setCartItems([...cartProducts, item]);
    //   };

    // const removeFromCart = (product) => {
    //     const newCartProducts = cartProducts.filter(item => item.name !== product.name);
    //     setCartItems(newCartProducts);
    //   };

    // const cartTotal = cartProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
    // const placeOrder = () => {
    //     dispatch(addOrder({ items: cartItems, total: cartTotal }));
    //     alert('Order placed successfully!');
    //     // clear the cart
    // };
    const cartItems = useSelector(state => state.cart);
    const cartTotal = useSelector(state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    const dispatch = useDispatch();
  
    const handleAddToCart = item => {
      dispatch(addToCart(item));
    };
  
    const handleRemoveFromCart = item => {
      dispatch(removeFromCart(item));
    };
  
    const handleClearCart = () => {
      dispatch(clearCart());
    };
    // useEffect(()=>{
    //     dispatch(fetchCart())
    // }, [dispatch])

    //if (!cart.length) return "Loading. Please wait"

    // return (
    //     <div>
    //         {cart.map((cartInfo)=>(
    //             <div key={cart.id}>
    //                 <h1>Inventory {cartInfo.count}</h1>
    //                 <p>{cartInfo.totalPrice}</p>
    //             </div>
    //         ))
    //         }
    //     </div>
    // )
    return (
        <div>
          
        <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {/* <img src={item.image} alt={item.name} /> */}
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>
                <button onClick={() => handleRemoveFromCart(item)}>-</button>
                {item.quantity}
                <button onClick={() => handleAddToCart(item)}>+</button>
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: ${cartTotal}</p>
      <button onClick={handleClearCart}>Clear Cart</button>
          {/* <button onClick={placeOrder}>Place Order</button> */}
        </div>
      );
} 

export default Cart;