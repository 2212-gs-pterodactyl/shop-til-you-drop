// import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { withRouter, Route, Switch, Redirect } from "react-router-dom";
// import { Login, Signup } from "./components/AuthForm";
// import Cart from "./components/Cart";
// import Home from "./components/Home";
// import { me } from "./store";
// import UserProfile from "./components/UserProfile";
// import AllProducts from "./components/AllProducts";
// import SingleProduct from "./components/SingleProduct";

// /**
//  * COMPONENT
//  */
// class Routes extends Component {
//   componentDidMount() {
//     this.props.loadInitialData();
//   }

//   render() {
//     const { isLoggedIn } = this.props;
//     return (
//       <div>
//         <Switch>
//           <Route path="/products/:id" component={SingleProduct} />
//           <Route path="/users/:id" component={UserProfile} />
//           <Route path="/cart" component={Cart} />
//           <Route path="/products" component={AllProducts} />
//           <Route path="/" component={UserProfile} />{" "}
//           {/* Eventually we will need a homepage @ this route*/}
//         </Switch>
//         {isLoggedIn ? (
//           <Switch>
//             <Route path="/home" component={Home} />
//             <Redirect to="/home" />
//           </Switch>
//         ) : (
//           <Switch>
//             <Route path="/" exact component={Login} />
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={Signup} />
//           </Switch>
//         )}
//       </div>
//     );
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = (state) => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
//     // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
//     isLoggedIn: !!state.auth.id,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     },
//   };
// };

// // // The `withRouter` wrapper makes sure that updates are not blocked
// // // when the url changes
// export default withRouter(connect(mapState, mapDispatch)(Routes));

import React, {useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Switch, Redirect} from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import UserDashboard from './components/UserDashboard';
import {me} from './store'
import Cart from "./components/Cart";
import UserProfile from "./components/UserProfile";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";


  
const Routes = () => {
  const isLoggedIn = useSelector(state => !!state.auth.id)
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
        <Route path='/' component={AllProducts} />
        </Switch>
    ) : (
      <Switch>
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/users/:id" component={UserProfile} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" component={AllProducts} />
        <Route path="/login" >{Login}</Route>
        <Route path="/signup">{Signup} </Route>
        <Route path='/' component={AllProducts} />
      </Switch>
      )}
    </div>
  )

}

export default Routes