import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import {
  useContract,
  UseTokenContract,
  UseTokenPrice,
  getTreasuryTokenValue,
  getTreasuryValueOfUser,
} from "../../hooks";
import { getAddresses } from "../../constants/addresses";
import { trim } from "../../utils/trim";
import { useCountdown } from "../../utils/countdown";
import { useWeb3React } from "@web3-react/core";

const DashboardComponent = () => {
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
      const totalSupply =
        (await tokenContract?._totalSupply()) / Math.pow(10, 5);

      console.log(totalSupply, "Dashboard Total Supply");

      const _tokenPrice = 1;
      // const _tokenPrice = await tokenPrice;

      console.log("Token Price", _tokenPrice);

      const circSupply =
        totalSupply -
        (await tokenContract.balanceOf(addresses.TOKEN_ADDRESS)) /
          Math.pow(10, 5);

      console.log(circSupply, "Circular Supply");

      setInfo({
        supply: circSupply,
        tokenPrice: _tokenPrice,
        marketCap: totalSupply * _tokenPrice,
      });
    })();
  }, []);

  return (
    <>
      <Container className="dashboard">
        <Row className="my-4 mx-4 dashboard__row">
          <Col xs="12">
            <Row className="justify-content-center mt-5">
              <Col sm="4" className="text-center my-2 readings__text">
                <p>MCLS Price</p>
                <h4>$161.32</h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Market Cap</p>
                <h4>
                  ${info.marketCap}
                  {/* {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                  }).format(info.marketCap)} */}
                </h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Circulating Supply</p>
                <h4>$ {info.supply}</h4>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Backed Liquidity</p>
                <h4>100%</h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Next Rebase</p>
                <h4>{`00:${rebaseTime[2]}:${rebaseTime[3]}`}</h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Total Supply</p>
                <h4>724,591.63</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-4 mx-4">
          <Col xs="12">
            <Row>
              <Col
                md="5"
                className="text-center p-5 my-2 readings__text dashboard__row"
              >
                <p>MCLS Price</p>
                <h4>{`$${trim(info.tokenPrice, 2)}`}</h4>
              </Col>
              <Col
                md="6"
                className="text-center offset-md-1 dashboard__row p-5 my-2 readings__text"
              >
                <p>Market Value of Treasury Asset</p>
                <h4>$2,864,488</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-4 mx-4">
          <Col xs="12">
            <Row>
              <Col
                md="5"
                className="text-center dashboard__row p-5 my-2 readings__text"
              >
                <p>Pool Value</p>
                <h4>$17,019,905</h4>
              </Col>
              <Col
                md="6"
                className="text-center offset-md-1 dashboard__row p-5 my-2 readings__text"
              >
                <p>MCLS Insurance Fund Value</p>
                <h4>$1,531,293</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-4 mx-4">
          <Col xs="12">
            <Row>
              <Col
                md="4"
                className="text-center dashboard__row p-5 my-2 readings__text"
              >
                <p>Total Supply</p>
                <h4>724,591.63</h4>
              </Col>
              <Col
                md="3"
                className="text-center offset-md-1 dashboard__row p-5 my-2 readings__text"
              >
                <p>Total Supply</p>
                <h4>724,591.63</h4>
              </Col>
              <Col
                md="3"
                className="text-center offset-md-1 dashboard__row p-5 my-2 readings__text"
              >
                <p>Total Supply</p>
                <h4>724,591.63</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardComponent;
