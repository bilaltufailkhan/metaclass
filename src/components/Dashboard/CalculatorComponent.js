import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  Row,
  Button,
} from "reactstrap";

const CalculatorComponent = () => {
  const [mcls, setMcls] = useState(162.84);
  const [apy, setApy] = useState(19686.1);
  const [pricePurchase, setPricePurchase] = useState(162.84);
  const [days, setDays] = useState(30);

  const [initInvestment, setInitInvestment] = useState(0);
  const [currentWealth, setCurrentWealth] = useState(0);
  const [rewardEst, setRewardEst] = useState(0);
  const [potentialReturn, setPotentialReturn] = useState(0);

  const onFormSubmit = () => {
    // e.preventDefault();
  };

  const handleOnChange = () => {};

  const resetValue = () => {
    const initialInvestment = mcls * apy * pricePurchase;
    setInitInvestment(initialInvestment);
  };

  return (
    <>
      <Container className="calculator p-5 my-5 rounded">
        <Row>
          <Col xs="12">
            <h3>Calculator</h3>
            <span>Estimate your Return</span>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="4" sm="12" className="text-center calculator__text my-5">
            <p>MCLS Price</p>
            <h2>${mcls}</h2>
          </Col>
          <Col md="4" sm="12" className="text-center calculator__text my-5">
            <p>Current APY</p>
            <h2>{apy}%</h2>
          </Col>
          <Col md="4" sm="12" className="text-center calculator__text my-5">
            <p>Your MCLS Balance</p>
            <h2>0 MCLS</h2>
          </Col>
        </Row>
        <Form className="calculator__form" onSubmit={onFormSubmit}>
          <Row className="justify-content-between">
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="mcls_amount">MCLS Amount</Label>
                <InputGroup>
                  <Input
                    type="text"
                    name="mcls_amount"
                    placeholder={mcls}
                    onChange={(e) => setMcls(e.target.value)}
                    value={mcls}
                  />
                  <InputGroupAddon addonType="append">
                    <Button onClick={() => setMcls(0)}>Max</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="apy">APY %</Label>
                <InputGroup>
                  <Input type="text" name="apy" placeholder={apy} value={apy} />
                  <InputGroupAddon addonType="append">
                    <Button onClick={resetValue}>Current</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="price_at_purchase">
                  MCLS price at purchase ($)
                </Label>
                <InputGroup>
                  <Input
                    type="text"
                    name="price_at_purchase"
                    placeholder={pricePurchase}
                    value={pricePurchase}
                  />
                  <InputGroupAddon addonType="append">
                    <Button onClick={resetValue}>Current</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="future_price">Future MCLS market price ($)</Label>
                <InputGroup>
                  <Input type="text" name="future_price" placeholder="162.84" />
                  <InputGroupAddon addonType="append">
                    <Button onClick={resetValue}>Current</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="my-5">
              <FormGroup>
                <Label for="amount" className="mb-5">
                  <h3>{days} Days</h3>
                </Label>
                <Input
                  id="exampleRange"
                  name="range"
                  type="range"
                  className="rangeInput"
                  min="0"
                  max="365"
                  step="1"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row className="py-5">
          <Col xs="12">
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Your initial investment</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>${initInvestment}</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Current wealth</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>${currentWealth}</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>MCLS rewards estimation</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>{rewardEst} MCLS</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Potential return</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>${potentialReturn}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CalculatorComponent;
