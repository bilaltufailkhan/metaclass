import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import {
  UseTokenContract,
  UseTokenPrice,
  getTreasuryTokenValue,
  getTreasuryValueOfUser,
} from "../../hooks";
import { getAddresses } from "../../constants/addresses";
import { trim } from "../../utils/trim";
import { useCountdown } from "../../utils/countdown";

import { useWeb3React } from "@web3-react/core";

const AccountComponent = () => {
  const tokenContract = UseTokenContract();
  const tokenPrice = UseTokenPrice();
  const treasuryTokenValue = getTreasuryTokenValue();
  const treasuryUserValue = getTreasuryValueOfUser();
  const addresses = getAddresses(56);
  const rebaseTime = useCountdown();

  const [info, setInfo] = useState({
    supply: "",
    tokenPrice: "",
    marketCap: "",
    treasuryValue: "",
  });

  useEffect(() => {
    (async () => {
      // console.log("library", await library?.getBalance(addresses.TREASURY_ADDRESS));
      const totalSupply =
        (await tokenContract?.totalSupply()) / Math.pow(10, 5);

      const _tokenPrice = await tokenPrice;

      const circSupply =
        totalSupply -
        (await tokenContract.balanceOf(addresses.FIREPIT_ADDRESS)) /
          Math.pow(10, 5);

      const _treasuryTokenValue = await treasuryTokenValue;
      const _treasuryUserValue = await treasuryUserValue;
      // console.log('x',_treasuryUserValue);

      // const treasuryValue =
      //   ((await tokenContract.balanceOf(addresses.TREASURY_ADDRESS)) /
      //     Math.pow(10, 5)) *
      //   _tokenPrice;

      setInfo({
        supply: circSupply,
        tokenPrice: _tokenPrice,
        marketCap: totalSupply * _tokenPrice,
      });
    })();
  }, []);
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Col
            md="3"
            sm="12"
            className="p-4 my-4 dashboard__row text__reading text-center"
          >
            <p>Your Balance</p>
            <h4>$0</h4>
            <p>0 MCLS</p>
          </Col>
          <Col
            md="3"
            sm="12"
            className="p-4 my-4 dashboard__row text__reading offset-md-1 text-center"
          >
            <p>APY</p>
            <h4>102,846%</h4>
            <p>Daily ROI 2.28%</p>
          </Col>
          <Col
            md="3"
            sm="12"
            className="p-4 my-4 dashboard__row text__reading offset-md-1 text-center"
          >
            <p>Next Rebase:</p>
            <h4>{`00:${rebaseTime[2]}:${rebaseTime[3]}`}</h4>
            <p>You will earn money soon</p>
          </Col>
        </Row>
        <Row className="dashboard__row p-5">
          <Col xs="12">
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Current MCLS Price</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>{`$${trim(info.tokenPrice, 2)}`}</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Next Reward Amount</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>0 MCLS</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Next Reward Amount USD</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>$0</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Next Reward Yield</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>0.02355%</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>ROI(1-Day Rate) USD</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>234324</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>ROI(5-Day Rate)</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>11.96%</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>ROI(5-Day Rate) USD</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>$0</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AccountComponent;
