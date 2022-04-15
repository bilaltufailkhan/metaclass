import React from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row } from "reactstrap";

const APY = () => {
  return (
    <>
      <Container className="apy">
        <Row className="official__address justify-content-center">
          <Col xs="12" className="text-center">
            <p>Official Address: 0xa18bdf653018166e58319dee3487f72f13147f38</p>
          </Col>
        </Row>
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
            <h2 className="text_light">
              Reward every 10 Minutes - 144 Times a Day
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default APY;
