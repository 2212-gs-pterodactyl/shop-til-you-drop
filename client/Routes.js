import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import UserDashboard from './components/UserDashboard'
import { me } from './store'
import Cart from './components/Cart'
import UserProfile from './components/UserProfile'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import OrderSummary from './components/OrderSummary'

const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={UserDashboard} />
          {/* <Redirect to="/home" /> */}
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/" component={AllProducts} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/users/:id" component={UserProfile} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={AllProducts} />
          <Route path="/login">{Login}</Route>
          <Route path="/signup">{Signup} </Route>
          <Route path="/orders/:id" component={OrderSummary} />
          <Route path="/" component={AllProducts} />
        </Switch>
      )}
    </div>
  )
}

export default Routes
