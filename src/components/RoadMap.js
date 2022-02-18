import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/style.css";

const RoadMap = () => {
  return (
    <>
      <Container className="roadmap py-5 my-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col xs="7">
            <h1>Product Roadmap</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center">
          <Col sm="4" className="ads__card p-4">
            <h5>2M+</h5>
            <p>Unique Visitors</p>
          </Col>
          <Col sm="4" className="p-4"></Col>
        </Row>
      </Container>
    </>
  );
};

export default RoadMap;
