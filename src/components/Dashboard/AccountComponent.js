import React from "react";
import { Col, Container, Row } from "reactstrap";

const AccountComponent = (props) => {
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
            <h4>383,025.8%</h4>
            <p>Daily ROI 2.28%</p>
          </Col>
          <Col
            md="3"
            sm="12"
            className="p-4 my-4 dashboard__row text__reading offset-md-1 text-center"
          >
            <p>Next Rebase:</p>
            <h4>00:10:00</h4>
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
                <span>$162.84</span>
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
                <span>$0</span>
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
