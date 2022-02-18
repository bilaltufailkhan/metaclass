import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

const Control = () => {
  return (
    <>
      <Container className="control py-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs="8">
            <h1>Take full control of your platform</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Control;
