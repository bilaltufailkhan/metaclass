/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/style.css";

import market from "../assets/img/metaclass-assets/light/marketwatch.svg";
import yahoo from "../assets/img/metaclass-assets/light/yahoofinance.svg";
import post from "../assets/img/metaclass-assets/light/financialpost.svg";

import marketDark from "../assets/img/metaclass-assets/dark/marketwatch.svg";
import yahooDark from "../assets/img/metaclass-assets/dark/yahoofinance.svg";
import postDark from "../assets/img/metaclass-assets/dark/financialpost.svg";

import digitalLight from "../assets/img/metaclass-assets/light/digital-light.png";
import digitalDark from "../assets/img/metaclass-assets/dark/digital-dark.png";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Partners = (props) => (
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
            <a
              href="https://www.marketwatch.com/press-release/metaclass-as-the-first-decentralized-classified-ads-platform-for-metaverse-2022-03-13?mod=search_headline"
              target="_blank" rel="noreferrer"
            >
              <img
                src={props.theme == "light" ? marketDark : market}
                width="100px"
                height="auto" />
            </a>
          </Zoom>
        </Col>
        <Col md="2" sm="4" className="partner__img my-3">
          <Zoom>
            <a
              href="https://finance.yahoo.com/news/metaclass-first-decentralized-classified-ads-184500312.html"
              target="_blank"
            >
              <img
                src={props.theme == "light" ? yahooDark : yahoo}
                width="100px"
                height="auto" />
            </a>
          </Zoom>
        </Col>
        <Col md="2" sm="4" className="partner__img my-3">
          <Zoom>
            <a
              href="https://markets.financialcontent.com/startribune/news/read/42252831/metaclass_as_the_first_decentralized_classified_ads_platform_for_metaverse"
              target="_blank"
            >
              <img
                src={props.theme == "light" ? postDark : post}
                width="100px"
                height="auto" />
            </a>
          </Zoom>
        </Col>
        <Col md="2" sm="4" className="partner__img my-3">
          <Zoom>
            <a
              href="https://www.digitaljournal.com/pr/metaclass-as-the-first-decentralized-classified-ads-platform-for-the-metaverse"
              target="_blank"
            >
              <img
                src={props.theme == "light" ? digitalDark : digitalLight}
                width="100px"
                height="auto" />
            </a>
          </Zoom>
        </Col>
      </Row>
    </Container>
  </>
);

export default Partners;
