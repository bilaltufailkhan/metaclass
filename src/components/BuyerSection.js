import React from "react";
import "../assets/css/style.css";

import { Container, Row, Col } from "reactstrap";

import illustration2 from "../assets/img/mobile.png";

import { Bounce, Zoom } from "react-reveal";

const BuyerSection = () => {
  return (
    <>
      <Container className="buyer__section py-5 my-5">
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <Bounce left>
              <h2>Being a Buyer</h2>
              <p className="pr-5">
                As a buyer, we aim to protect your privacy and anonymity. You’ll
                be able to buy goods and services in BUSD, BNB and DCLASS.
                <br />
                <br />
                There is no cost of doing business through our platform. The
                platform transaction fees is charge to the seller.
                <br />
                <br />
                The fee will be initially determined by us, and will be changed
                through governance platform.
              </p>
            </Bounce>
          </Col>
          <Col md="6" className="text-right">
            <Zoom>
              <img src={illustration2} width="100%" height="auto" />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BuyerSection;
