import React from "react";
import "../assets/css/style.css";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import MainNav from "./MainNavFunc";

import logoDark from "../assets/img/metaclass-assets/dark/logo.svg";
import logo from "../assets/img/metaclass-assets/light/logo.png";

import tokenImg from "../assets/img/metaclass-assets/pancakeswap.svg";

const Wallet = (props) => {
  return (
    <>
      <Container className="bgSetting wallet text-white vh-auto vw-100">
        <Row className="justify-content-center align-items-center">
          <Col
            md="6"
            sm="12"
            className="order-2 order-md-1 align-items-center justify-content-center py-5"
          >
            <div className="px-5 stake__one">
              <h1>Stake MetaClass</h1>
              <p className="pr-5 mb-5">
                Stake BEP-20 MetaClass to earn MetaClass. You can buy on
                Pancakeswap to get MetaClass tokens.
              </p>
              <div className="form__inner">
                <p>DPY -</p>
                <p>APY -</p>
                <p>Total Staked 0.00MetaClass</p>
              </div>
              <InputGroup>
                <Input
                  className="input__withdraw"
                  type="text"
                  placeholder="0.00"
                />
                <InputGroupAddon addonType="append">
                  <Button className="btn__withdraw">Withdraw</Button>
                </InputGroupAddon>
              </InputGroup>
              <Button className="btn btn-block btn-lg btn__wallet">
                Connect Wallet
              </Button>
              <Button className="btn btn-block btn-lg btn__getTokens">
                <img src={tokenImg} width="25px" height="auto" />
                &nbsp;&nbsp;Get MetaClass Tokens
                <i
                  className="fa-solid fa-arrow-right"
                  style={{
                    fontSize: "1rem",
                    color: "#efefef",
                    paddingLeft: "40%",
                  }}
                ></i>
              </Button>
            </div>
          </Col>
          <Col md="6" sm="12" className="order-1 order-md-2 py-5">
            <div className="px-5 stake__two">
              <img
                src={props.theme == "light" ? logoDark : logo}
                height="50px"
                width="auto"
              />
              <h2>MetaClass Stake Info</h2>
              <div className="metaBox">
                <div className="box1">
                  <p>0</p>
                  <p>MetaClass Stakes</p>
                </div>
                <div className="box2">
                  <p>0</p>
                  <p>Total Holders</p>
                </div>
                <br />
                <div className="box3">
                  <p>100,000,000</p>
                  <p>Total Supply</p>
                </div>
                <div className="box4">
                  <p>0</p>
                  <p>Distributed</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Wallet;
