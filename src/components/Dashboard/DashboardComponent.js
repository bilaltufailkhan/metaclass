import React from "react";
import { Col, Container, Row } from "reactstrap";

const DashboardComponent = () => {
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
                <h4>$98,737,533</h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Circulating Supply</p>
                <h4>612,026.06</h4>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Backed Liquidity</p>
                <h4>100%</h4>
              </Col>
              <Col sm="4" className="text-center my-2 readings__text">
                <p>Next Rebase</p>
                <h4>00:10:44</h4>
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
                <h4>$159.59</h4>
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
