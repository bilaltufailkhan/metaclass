import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import { Zoom, Fade, Bounce } from "react-reveal";

import illustration2 from "../assets/img/illustration2.png";
import sellerIllustration from "../assets/img/metaclass-assets/dark/seller-illustration.svg";
import sellerIllustrationLight from "../assets/img/metaclass-assets/light/seller-illustration.svg";

const SellerSection = ({ theme }) => {
  return (
    <>
      <Container className="seller__section py-5 my-5">
        <Row className="justify-content-center align-items-center">
          <Col md="6">
            <Zoom>
              <img src={sellerIllustration} width="80%" height="auto" />
            </Zoom>
          </Col>
          <Col md="6">
            <Bounce right>
              <h2>Being a Seller</h2>
              <p className="pr-5">
                As a seller you’ll be in full control of how you’ll like to
                dictate terms of your business. You’ll be able to receive
                payments in BUSD, BNB and DCLASS.
                <br />
                <br />
                The cost to place ad is nothing, you’re only required to hold
                certain number of tokens to be eligible to create ad.
                <br />
                <br />
                This number will be initially determined by us, and will be
                changed through governance platform.
              </p>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SellerSection;
