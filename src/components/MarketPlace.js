import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import illustration2 from "../assets/img/illustration2.png";

import bit1Dark from "../assets/img/metaclass-assets/dark/huge-market-gap-icon.svg";
import bit2Dark from "../assets/img/metaclass-assets/dark/hight-impact-icon.svg";
import bit3Dark from "../assets/img/metaclass-assets/dark/market-leader-icon.svg";

import bit1 from "../assets/img/metaclass-assets/light/huge-market-gap-icon.svg";
import bit2 from "../assets/img/metaclass-assets/light/hight-impact-icon.svg";
import bit3 from "../assets/img/metaclass-assets/light/market-leader-icon.svg";

import { Zoom, Fade } from "react-reveal";

const MarketPlace = (props) => {
  const { theme } = props;
  return (
    <>
      <Container className="market__place py-5 my-5">
        <Row className="align-items-center justify-content-center">
          <Col md="6" className="text-center">
            <Zoom>
              <img src={illustration2} width="70%" height="auto" />
            </Zoom>
          </Col>
          <Col md="6" className="py-5">
            <Fade right>
              <h2>Marketplace of 2 Million Users</h2>
              <p className="mb-5">
                You can promote your classified ad post to millions of users,
                which we are expected to reach in next 12 months by using
                aggressive growth tactics.
              </p>

              <Row>
                <Col xs="2">
                  <img
                    src={theme == "light" ? bit1Dark : bit1}
                    width="80%"
                    height="auto"
                  />
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
                  <img
                    src={theme == "light" ? bit2Dark : bit2}
                    width="80%"
                    height="auto"
                  />
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
                  <img
                    src={theme == "light" ? bit3Dark : bit3}
                    width="80%"
                    height="auto"
                  />
                </Col>
                <Col xs="10">
                  <h5>Market Leader</h5>
                  <p>
                    We aim to become one of the top classified websites in terms
                    of traffic across the globe.
                  </p>
                </Col>
                <Col xs="4" className="my-4">
                  <a
                    href="https://t.me/metaclassbsc"
                    target="_blank"
                    className="p-2 btn__audit"
                  >
                    Audit
                  </a>
                </Col>
              </Row>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MarketPlace;
