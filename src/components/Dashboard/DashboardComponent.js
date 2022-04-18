import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

import {
  UseTokenContract,
  UseTokenPrice,
  getTreasuryTokenValue,
  getTreasuryValueOfUser,
} from "../../hooks";

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

import { getAddresses } from "../../constants/addresses";
import { useCountdown } from "../../utils/countdown";

const DashboardComponent = () => {
  const tokenContract = UseTokenContract();
  const tokenPrice = UseTokenPrice();
  const treasuryTokenValue = getTreasuryTokenValue();
  const treasuryUserValue = getTreasuryValueOfUser();
  const addresses = getAddresses(56);
  const rebaseTime = useCountdown();

  const override = css`
    display: block;
    margin: 0 auto;
    // border-color: red;
  `;

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");



  const [info, setInfo] = useState({
    price: "",
    supply: "",
    tokenPrice: "",
    marketCap: "",
    treasuryValue: "",
    totalSupply: "",
    firePitValue: "",
  });

  useEffect(() => {
    (async () => {
      const totalSupply =
        (await tokenContract?._totalSupply()) / Math.pow(10, 5);
      const _tokenPrice = await tokenPrice;

      const circulatingSupply =
        (await tokenContract.getCirculatingSupply()) / Math.pow(10, 5);
      const firePit = (await tokenContract.firePitFee()) / Math.pow(10, 5);
      setInfo({
        price: "161.32",
        supply: circulatingSupply,
        tokenPrice: _tokenPrice,
        marketCap: totalSupply * _tokenPrice,
        totalSupply,
        firePitValue: firePit,
      });
      setLoading(false);
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
                <h4>
                  {!loading ? (
                    "$ " + info.price
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Market Cap</p>
                <h4>
                  {!loading ? (
                    "$ " + info.marketCap
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Circulating Supply</p>
                <h4>
                  {!loading ? (
                    info.supply
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
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
                <h4>
                  {!loading ? (
                    info.totalSupply
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
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
                <h4>
                  {!loading ? (
                    "$ " + info.price
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
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
                <p># Value of FirePit</p>
                <h4>
                  {!loading ? (
                    info.firePitValue
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
              </Col>
              <Col
                md="3"
                className="text-center offset-md-1 dashboard__row p-5 my-2 readings__text"
              >
                <p>$ Value of FirePit</p>
                <h4>
                  {!loading ? (
                    "$ " + info.firePitValue
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
              </Col>
              <Col
                md="3"
                className="text-center offset-md-1 dashboard__row p-5 my-2 readings__text"
              >
                <p>%FirePit:Supply</p>
                <h4>
                  {!loading ? (
                    ((info.firePitValue / info.price) * 100).toFixed(4)
                  ) : (
                    <PuffLoader
                      color={color}
                      loading={loading}
                      css={override}
                      size={30}
                    />
                  )}
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DashboardComponent;
