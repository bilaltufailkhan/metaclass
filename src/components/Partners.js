import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import market from "../assets/img/marketwatch.png";
import yahoo from "../assets/img/yahoofinance.png";
import post from "../assets/img/financialpost.png";

const Partners = () => {
  return (
    <>
      <Container className="partners py-5">
        <Row className="align-items-center justify-content-between">
          <Col xs="3">
            <h1>Partners {"&"} Integration</h1>
          </Col>
          <Col xs="2" className="offset-2 partner__img mr-2">
            <img src={market} width="150px" height="auto" />
          </Col>
          <Col xs="2" className="partner__img mr-2">
            <img src={yahoo} width="150px" height="auto" />
          </Col>
          <Col xs="2" className="partner__img">
            <img src={post} width="200px" height="auto" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partners;
