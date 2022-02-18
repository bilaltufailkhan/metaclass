import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import sliderBG from "../assets/img/illustration.svg";

const Slider = () => {
  return (
    <>
      <Container className="slider py-5 my-5">
        <Row className="align-items-center">
          <Col md="6">
            <h1>Decentralized Classified Ads Platform</h1>
            <p>
              Empowering communities to buy and sell products and services with
              full anonymity and privacy.
            </p>
            <Row>
              <Col xs="4">
                <a className="p-3 btn__telegram">Join Telegram</a>
              </Col>
              <Col xs="4">
                <a className="p-3 btn__info">
                  <i class="fa-solid fa-circle-play"></i>How it works
                </a>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <img src={sliderBG} width="600px" height="auto" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Slider;
