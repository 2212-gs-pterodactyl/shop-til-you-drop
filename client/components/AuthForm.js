import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ToastContainer, toast } from "react-toastify";

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
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} name={name}>
              <Form.Group>
                <div>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />
                </div>
              </Form.Group>
              <Col></Col>
              <div>
                <Button className="mt-3" type="submit">
                  {displayName}
                </Button>
                {displayName === "Sign Up" ? (
                  <div>
                    {" "}
                    <i>
                      Registration only requires email and password, where
                      password length is between 6 and 180 characters. After
                      registration, visit your dashboard to log your
                      information.
                    </i>{" "}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export const Login = <AuthForm name="login" displayName="Login" />;
export const Signup = <AuthForm name="signup" displayName="Sign Up" />;
