import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Careers = () => {
  return (
    <>
      <Container>
        <Col md={6}>
          <Card>
            <Card.Header>
              <h1>
                {" "}
                <i>DACTYL CAREERS.</i>
              </h1>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  At Dactyl, we are always seeking talent. Send resume as a PDF
                  to <b>hiring@dactylArbo.com</b> and indicate the desired
                  position(s) in the subject line.
                </p>
                <p>
                  <b>OPEN POSITIONS: </b>
                </p>
                <ul>
                  <li>Chief of Github Operations</li>
                  <li>Schema (re)Designer</li>
                  <li>Database Seeder</li>
                  <li>(Merge) Conflict Resolution Specialist</li>
                  <li>Dummy Data Technician/Logistician</li>
                  <li>CSS Maestro</li>
                </ul>
                <h4>
                  Click the branchway to return to the arboretum.<br></br>
                </h4>
              </Card.Text>
              <a href="/products">
                <Card.Img
                  variant="bottom"
                  src="https://media.cntraveler.com/photos/5f75e15027ff4a3188ba1b94/16:9/w_2240,c_limit/DallasArboretum-2020-GettyImages-1055889312.jpg"
                  alt="/products"
                />
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Careers;
