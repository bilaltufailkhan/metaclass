import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import market from "../assets/img/metaclass-assets/light/marketwatch.svg";
import yahoo from "../assets/img/metaclass-assets/light/yahoofinance.svg";
import post from "../assets/img/metaclass-assets/light/financialpost.svg";

import marketDark from "../assets/img/metaclass-assets/dark/marketwatch.svg";
import yahooDark from "../assets/img/metaclass-assets/dark/yahoofinance.svg";
import postDark from "../assets/img/metaclass-assets/dark/financialpost.svg";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Partners = (props) => {
  return (
    <>
      <Container className="partners py-5">
        <Row className="align-items-center justify-content-between">
          <Col md="4" sm="12" className="my-3">
            <Fade left>
              <h1>Partners {"&"} Integration</h1>
            </Fade>
          </Col>

          <Col md="2" sm="4" className="partner__img my-3">
            <Zoom>
              <img
                src={props.theme == "light" ? marketDark : market}
                width="100px"
                height="auto"
              />
              {/* <div className="logo__hover"></div> */}
            </Zoom>
          </Col>
          <Col md="2" sm="4" className="partner__img my-3">
            <Zoom>
              <img
                src={props.theme == "light" ? yahooDark : yahoo}
                width="100px"
                height="auto"
              />
            </Zoom>
          </Col>
          <Col md="2" sm="4" className="partner__img my-3">
            <Zoom>
              <img
                src={props.theme == "light" ? postDark : post}
                width="100px"
                height="auto"
              />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partners;
