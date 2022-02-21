import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import market from "../assets/img/marketwatch.png";
import yahoo from "../assets/img/yahoofinance.png";
import post from "../assets/img/financialpost.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Partners = () => {
  return (
    <>
      <Container className="partners py-5">
        <Row className="align-items-center justify-content-between">
          <Col md="3" sm="12" className="my-3">
            <Fade left>
              <h1>Partners {"&"} Integration</h1>
            </Fade>
          </Col>
          <Col md="2" sm="4" className="partner__img my-3">
            <Zoom>
              <img src={market} width="150px" height="auto" />
            </Zoom>
          </Col>
          <Col md="2" sm="4" className="partner__img my-3">
            <Zoom>
              <img src={yahoo} width="150px" height="auto" />
            </Zoom>
          </Col>
          <Col md="2" sm="4" className="partner__img my-3">
            <Zoom>
              <img src={post} width="150px" height="auto" />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partners;
