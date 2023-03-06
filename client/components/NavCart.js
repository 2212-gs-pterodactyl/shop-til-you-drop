import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItems from "./CartItems";

function NavCart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItems />
          <Button
            variant="success"
            onClick={() => alert("Proceed to checkout page still needs work")}
          >
            Proceed To Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavCart;
