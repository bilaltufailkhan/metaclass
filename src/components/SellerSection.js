import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import illustration2 from "../assets/img/illustration2.png";

const SellerSection = () => {
  return (
    <>
      <Container className="seller__section py-5 my-5">
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <img src={illustration2} width="100%" height="auto" />
          </Col>
          <Col md="6">
            <h2>Being a Seller</h2>
            <p className="pr-5">
              As a seller you’ll be in full control of how you’ll like to
              dictate terms of your business. You’ll be able to receive payments
              in BUSD, BNB and DCLASS.
              <br />
              <br />
              The cost to place ad is nothing, you’re only required to hold
              certain number of tokens to be eligible to create ad.
              <br />
              <br />
              This number will be initially determined by us, and will be
              changed through governance platform.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SellerSection;
