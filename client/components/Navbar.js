import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import NavCart from "./NavCart";

const Navbar = () => (
  <div>
    <h1>SHOP til you drop // "Buy 'til you die"?</h1>
    <nav>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/products">Products</Link>
        <Link to="/">Home</Link>
        <NavCart />
      </div>
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
// export default Navbar
