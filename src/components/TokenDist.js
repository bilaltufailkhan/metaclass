import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/css/style.css";

import { Zoom } from "react-reveal";

import tokenImg from "../assets/img/metaclass-assets/light/total-supply-light.svg";
import tokenImgDark from "../assets/img/metaclass-assets/dark/total-supply-dark.svg";

import tokenomicsDark from '../assets/img/metaclass-assets/dark/tokenomics-dark.png'
import tokenomicsLight from '../assets/img/metaclass-assets/light/tokenomics-light.png'

import BscScanDark from "../assets/img/metaclass-assets/dark/bscscan-logo.svg";
import CoinGekoDark from "../assets/img/metaclass-assets/dark/coin-gecko-logo.svg";
import PanCakeDark from "../assets/img/metaclass-assets/dark/pancake-swap-logo.svg";
import CoinMarketDark from "../assets/img/metaclass-assets/dark/coin-market-cap-loog.svg";

import BscScan from "../assets/img/metaclass-assets/light/bsccan-logo.svg";
import CoinGeko from "../assets/img/metaclass-assets/light/coin-gecko-logo.svg";
import PanCake from "../assets/img/metaclass-assets/light/pancake-swap-logo.svg";
import CoinMarket from "../assets/img/metaclass-assets/light/coin-market-cap-logo.svg";

const TokenDist = (props) => {
  const { theme } = props;
  return (
    <>
      <Container className="tokenDist pt-5">
        <Row className="justify-content-center align-items-center text-center">
          <Col md="7" sm="12">
            <Zoom>
              <h1>Token Distribution</h1>
              <p>All distributions are locked in unicrypt locker</p>
            </Zoom>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center my-5 text-center">
          <Col xs="12">
            <Zoom>
              <img
                src={props.theme == "dark" ? tokenomicsLight : tokenomicsDark}
                width="70%"
                height="auto"
              />
            </Zoom>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center my-5">
          <Col md="2" sm="6" className="text-center mb-5">
            <a href="https://bscscan.com/" target="_blank">
              <img
                src={theme == "light" ? BscScanDark : BscScan}
                width="150px"
                height="auto"
              />
            </a>
          </Col>
          <Col md="2" sm="6" className="text-center mb-5">
            <a href="https://www.coingecko.com/" target="_blank">
              <img
                src={theme == "light" ? CoinGekoDark : CoinGeko}
                width="150px"
                height="auto"
              />
            </a>
          </Col>
          <Col md="2" sm="6" className="text-center mb-5">
            <a href="https://pancakeswap.finance/" target="_blank">
              <img
                src={theme == "light" ? PanCakeDark : PanCake}
                width="150px"
                height="auto"
              />
            </a>
          </Col>
          <Col md="2" sm="6" className="text-center mb-5">
            <a href="https://coinmarketcap.com/" target="_blank">
              <img
                src={theme == "light" ? CoinMarketDark : CoinMarket}
                width="150px"
                height="auto"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TokenDist;
