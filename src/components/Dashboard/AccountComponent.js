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

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const AccountComponent = () => {
  const [mcls, setMcls] = useState(162.84);
  const tokenContract = UseTokenContract();
  const tokenPrice = UseTokenPrice();
  const treasuryTokenValue = getTreasuryTokenValue();
  const treasuryUserValue = getTreasuryValueOfUser();
  const addresses = getAddresses(56);
  const rebaseTime = useCountdown();

  const [info, setInfo] = useState({
    balance: 0,
    nextReward: 0,
    nextAmount: 0,
    accountBalance: "",
    tokenPrice: "",
  });

  const override = css`
    display: block;
    margin: 0 auto;
    // border-color: red;
  `;

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    (async () => {
      const _tokenPrice = await tokenPrice;
      console.log(_tokenPrice, "Accounts Token Price");
      const accountBalance = await tokenContract?.balanceOf(
        addresses.TOKEN_ADDRESS
      );
      const balance = _tokenPrice * accountBalance;
      const nextReward = balance + 0.3834882;
      const nextAmount = nextAmount * mcls;
      setInfo({
        balance: balance,
        accountBalance: accountBalance,
        nextReward: nextReward,
        nextAmount: nextAmount,
        tokenPrice: _tokenPrice,
      });
      setLoading(false);
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
            <h4>
              {!loading ? (
                "$ " + info.tokenPrice * info.accountBalance
              ) : (
                <PuffLoader
                  color={color}
                  loading={loading}
                  css={override}
                  size={30}
                />
              )}
            </h4>
            <p>{mcls} MCLS</p>
          </Col>
          <Col
            md="3"
            sm="12"
            className="p-4 my-4 dashboard__row text__reading offset-md-1 text-center"
          >
            <p>APY</p>
            <h4>19686.1%</h4>
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
                <span>${mcls}</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Next Reward Amount</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>{info.nextReward} MCLS</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Next Reward Amount USD</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>$ {info.nextAmount}</span>
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
