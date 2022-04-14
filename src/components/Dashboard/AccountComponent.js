import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import {
  UseTokenContract,
  UseTokenPrice,
  getTreasuryTokenValue,
  getTreasuryValueOfUser,
  useContract,
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
    balance: "",
    tokenPrice: "",
    marketCap: "",
    treasuryValue: "",
  });

  useEffect(() => {
    (async () => {
      // const _tokenPrice = await tokenPrice;
      const _tokenPrice = 1;
      const accountBalance = await tokenContract.getBalance(
        addresses.TOKEN_ADDRESS
      );

      console.log(accountBalance, "******Account Balance");

      console.log("Token Price", _tokenPrice);

      setInfo({
        balance: accountBalance,
        tokenPrice: _tokenPrice,
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
            <h4>${info.balance}</h4>
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
                <span>$ {info.circulatingSupply}</span>
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
