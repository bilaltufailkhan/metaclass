import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import illustration2 from "../assets/img/illustration2.png";

import bit1 from "../assets/img/bit1.svg";
import bit2 from "../assets/img/bit2.svg";
import bit3 from "../assets/img/bit3.svg";

const MarketPlace = () => {
  return (
    <>
      <Container className="market__place py-5 my-5">
        <Row className="align-items-center justify-content-center">
          <Col md="6" className="text-center">
            <img src={illustration2} width="400px" height="auto" />
          </Col>
          <Col md="6" className="py-5">
            <h2>Marketplace of 2 Million Users</h2>
            <p className="mb-5">
              You can promote your classified ad post to millions of users,
              which we are expected to reach in next 12 months by using
              aggressive growth tactics.
            </p>
            <Row>
              <Col xs="2">
                <img src={bit1} width="80px" height="auto" />
              </Col>
              <Col xs="10">
                <h5>Huge Market Gap</h5>
                <p>
                  Every year $19 billion is spent to advertise on classified
                  website platforms.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                <img src={bit2} width="80px" height="auto" />
              </Col>
              <Col xs="10">
                <h5>High Impact</h5>
                <p>
                  The overall impact of classified ads in terms of business
                  across its users is more than $300b+
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                <img src={bit3} width="80px" height="auto" />
              </Col>
              <Col xs="10">
                <h5>Market Leader</h5>
                <p>
                  We aim to become one of top classified websites in terms of
                  traffic across the globe.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MarketPlace;
