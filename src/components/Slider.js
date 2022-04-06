import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import sliderBG from "../assets/img/illustration.svg";
import Fade from "react-reveal/Fade";
import SideSocials from "./global/SideSocials";

import solidProofLogo from "../assets/img/solidproof.png";

const Slider = () => {
  return (
    <>
      <SideSocials />
      <Container className="slider py-5">
        <Row className="align-items-center">
          <Col md="6" sm="12">
            <Fade left>
              <h1>Decentralized Classified Ads Platform</h1>
              <p>
                MetaClass is a decentralized hotline technological network of 3D
                virtual worlds subjected to converge physical, augmented, and
                virtual reality in a shared online space powered by an open
                blockchain technology that encompasses digital assets and
                digital identities.
              </p>
              <Row className="">
                <Col md="4" sm="12">
                  <a
                    href="https://t.me/metaclassbsc"
                    target="_blank"
                    className="p-3 btn__telegram"
                  >
                    Join Telegram
                  </a>
                </Col>
                <Col md="4" sm="12">
                  <a className="p-3 btn__info">
                    <i class="fa-solid fa-circle-play"></i>How it works
                  </a>
                </Col>
              </Row>
              <Row className="justify-content-center text-center text-md-left">
                <Col sm="12">
                  <img src={solidProofLogo} width="60%" height="auto" />
                </Col>
              </Row>
            </Fade>
          </Col>
          <Col md="6" sm="12" className="text-center">
            <img
              src={sliderBG}
              width="100%"
              height="auto"
              className="slider__bg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Slider;
