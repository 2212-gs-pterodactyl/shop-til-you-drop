// import React from "react";
// import { connect } from "react-redux";
// import { authenticate } from "../store";

// /**
//  * COMPONENT
//  */
// const AuthForm = (props) => {
//   const { name, displayName, handleSubmit, error } = props;

//   return (
//     <div>
//       <form onSubmit={handleSubmit} name={name}>
//         <div>
//           <label htmlFor="username">
//             <small>Username</small>
//           </label>
//           <input name="username" type="text" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <small>Password</small>
//           </label>
//           <input name="password" type="password" />
//         </div>
//         <div>
//           <button type="submit">{displayName}</button>
//         </div>
//         {error && error.response && <div> {error.response.data} </div>}
//       </form>
//     </div>
//   );
// };

// /**
//  * CONTAINER
//  *   Note that we have two different sets of 'mapStateToProps' functions -
//  *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
//  *   function, and share the same Component. This is a good example of how we
//  *   can stay DRY with interfaces that are very similar to each other!
//  */
// const mapLogin = (state) => {
//   return {
//     name: "login",
//     displayName: "Login",
//     error: state.auth.error,
//   };
// };

// const mapSignup = (state) => {
//   return {
//     name: "signup",
//     displayName: "Sign Up",
//     error: state.auth.error,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const formName = evt.target.name;
//       const username = evt.target.username.value;
//       const password = evt.target.password.value;
//       dispatch(authenticate(username, password, formName));
//     },
//   };
// };

// export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../store";

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    dispatch(authenticate(email, password, formName));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
          {displayName === "Sign Up" ? (
            <div>
              {" "}
              <i>
                Registration only requires email and password, where password
                length is between 6 and 180 characters. After registration,
                visit your dashboard to log your information.
              </i>{" "}
            </div>
          ) : (
            <></>
          )}
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export const Login = <AuthForm name="login" displayName="Login" />;
export const Signup = <AuthForm name="signup" displayName="Sign Up" />;
