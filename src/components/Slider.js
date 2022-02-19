import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import sliderBG from "../assets/img/illustration.svg";

const Slider = () => {
  return (
    <>
      <Container className="slider py-5 my-5">
        <Row className="align-items-center">
          <Col md="6" sm="12">
            <h1>Decentralized Classified Ads Platform</h1>
            <p>
              Empowering communities to buy and sell products and services with
              full anonymity and privacy.
            </p>
            <Row>
              <Col lg="4" md="4">
                <a className="p-3 btn__telegram btn">Join Telegram</a>
              </Col>
              <Col lg="4" md="4">
                <a className="p-3 btn__info btn">
                  <i class="fa-solid fa-circle-play"></i>How it works
                </a>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="12" className="text-center">
            <img src={sliderBG} width="100%" height="auto" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Slider;
