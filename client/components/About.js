import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const About = () => {
  return (
    <Container>
      <Col md={6}>
        <Card>
          <Card.Header>
            <h1>
              {" "}
              <i>ABOUT DACTYL.</i>
            </h1>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Dactyl Arboretum was first founded in February 2023 as a
              bi-coastal collaboration among Alex Kalupaila, Brian Wong, Forhad
              Zinnah and Jason Wang. Despite knowing next to nothing about
              plants (or Github operations), these four Fullstack operators put
              their skills to use to make a functioning eCommerce site. After
              all the merge conflicts, schema redesigns and thunk modifications,
              DACTYL ARBORETUM finally came alive on 8 March 2023. Click on the
              branchway below to check us out.{" "}
            </Card.Text>
          </Card.Body>

          <a href="/products">
            <Card.Img
              className="about-img p-4"
              variant="top"
              src="https://media.cntraveler.com/photos/5f75e15027ff4a3188ba1b94/16:9/w_2240,c_limit/DallasArboretum-2020-GettyImages-1055889312.jpg"
              alt="/products"
            />
          </a>
        </Card>
      </Col>
    </Container>
  );
};

export default About;
