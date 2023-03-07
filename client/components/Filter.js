import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Filter() {
  const [show, setShow] = useState(false);
  const [sizeValue, setSizeValue] = useState("1");

  const sizes = [
    { name: "All", value: "1" },
    { name: "S", value: "2" },
    { name: "M", value: "3" },
    { name: "L", value: "4" },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="fixed-top mt-2">
      <Button variant="danger" onClick={handleShow} size="lg">
        Filter
      </Button>
      <Offcanvas placement="start" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Filter by size:
          <div className="mt-4">
            <ButtonGroup>
              {sizes.map((size, idx) => (
                <ToggleButton
                  key={idx}
                  id={`size-${idx}`}
                  type="radio"
                  variant={"outline-success"}
                  name="size"
                  value={size.value}
                  size="lg"
                  checked={sizeValue === size.value}
                  onChange={(e) => setSizeValue(e.currentTarget.value)}
                >
                  {size.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Filter;
