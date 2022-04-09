import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import sliderBG from "../assets/img/illustration.svg";
import Fade from "react-reveal/Fade";
import SideSocials from "./global/SideSocials";

import solidProofLogo from "../assets/img/solidproof.png";
import { Modal } from "react-bootstrap";

const Slider = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

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
                virtual reality in a shared online space powered by an
                Auto-Compounding, Auto-Staking System that encompasses digital
                assets and digital identities.
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
                  <button className="p-3 btn__info" onClick={handleShow}>
                    <i class="fa-solid fa-circle-play"></i>How it works
                  </button>
                </Col>
              </Row>
              <Row className="justify-content-center text-center text-md-left">
                <Col sm="12">
                  <a
                    href="https://github.com/solidproof/projects/tree/main/MetaClass"
                    target="_blank"
                  >
                    <img src={solidProofLogo} width="60%" height="auto" />
                  </a>
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
      <Modal
        show={modalShow}
        onHide={handleClose}
        centered
        className="modal"
        size="lg"
      >
        <Modal.Body
          className={
            `text-center pb-5 ` + props.theme === "dark"
              ? "bg-light"
              : "bg-dark"
          }
        >
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/byl0CPxA95s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Slider;
