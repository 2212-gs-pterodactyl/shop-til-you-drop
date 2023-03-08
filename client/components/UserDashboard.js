import React from "react";
import { useSelector } from "react-redux";
import AdminProfile from "./AdminProfile";
import UserProfile from "./UserProfile";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const UserDashboard = (props) => {
  const email = useSelector((state) => state.auth.email);
  const { firstName, role } = useSelector((state) => state.auth);

  return (
    <Container>
      <Col className="ml-4">
        <div>
          <h3>
            Welcome
            {firstName
              ? ", " + firstName + "!"
              : "! Use this page to log your information."}
          </h3>
          {role === "admin" ? <AdminProfile /> : <UserProfile />}
        </div>
      </Col>
    </Container>
  );
};

export default UserDashboard;
