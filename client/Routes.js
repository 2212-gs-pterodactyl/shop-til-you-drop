import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import UserDashboard from "./components/UserDashboard";
import { me } from "./store";
import UserProfile from "./components/UserProfile";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import OrderSummary from "./components/OrderSummary";
import Checkout from "./components/Checkout";
import CartItems from "./components/CartItems";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import Careers from "./components/Careers";

const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route exact path="/home" component={UserDashboard} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/ordersummary" component={OrderSummary} />
          <Route exact path="/" component={AllProducts} />
          <Route exact path="/login" component={AllProducts} />
          <Route exact path="/signup" component={AllProducts} />
          <Route exact path="/*" component={PageNotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/careers" component={Careers} />

          <Route exact path="/users/:id" component={UserProfile} />
          <Route exact path="/cart" component={CartItems} />
          <Route exact path="/products" component={AllProducts} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login">
            {Login}
          </Route>
          <Route exact path="/signup">
            {Signup}{" "}
          </Route>
          <Route exact path="/ordersummary" component={OrderSummary} />
          <Route exact path="/" component={AllProducts} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      )}
    </div>
  );
};

export default Routes;
