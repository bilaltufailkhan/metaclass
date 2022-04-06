import React from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row } from "reactstrap";

const APY = () => {
  return (
    <>
      <Container className="apy">
        <Row className="align-items-center justify-content-center">
          <Col md="3" sm="12" className="my-3 text-md-left text-center">
            <Fade left>
              <h1>APY</h1>
            </Fade>
          </Col>

          <Col md="3" sm="12" className="my-3 text-center">
            <Fade right>
              <h1 className="apy__value">196868.1%</h1>
            </Fade>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs="12">
            <h1 className="text_light">Reward every 24 Hours</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default APY;
