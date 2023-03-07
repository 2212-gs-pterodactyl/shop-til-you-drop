import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";

/**
 * COMPONENT
 */
const UserDashboard = (props) => {
  const email = useSelector((state) => state.auth.email);
  const firstName = useSelector((state) => state.auth.firstName);
  // console.log(state)

  return (
    <div>
      <h3>
        Welcome
        {firstName
          ? ", " + firstName + "!"
          : "! Use this page to log your information."}
      </h3>
      <UserProfile />
    </div>
  );
};

export default UserDashboard;
