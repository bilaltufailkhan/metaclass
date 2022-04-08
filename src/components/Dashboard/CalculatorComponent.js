import React from "react";
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
            <h2>$162.84</h2>
          </Col>
          <Col md="4" sm="12" className="text-center calculator__text my-5">
            <p>Current APY</p>
            <h2>383,025.8%</h2>
          </Col>
          <Col md="4" sm="12" className="text-center calculator__text my-5">
            <p>Your MCLS Balance</p>
            <h2>0 MCLS</h2>
          </Col>
        </Row>
        <Form className="calculator__form">
          <Row className="justify-content-between">
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="amount">MCLS Amount</Label>
                <InputGroup>
                  <Input
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="0"
                  />
                  <InputGroupAddon addonType="append">
                    <Button>Max</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="amount">APY %</Label>
                <InputGroup>
                  <Input
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="383025.8"
                  />
                  <InputGroupAddon addonType="append">
                    <Button>Current</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="amount">MCLS price at purchase ($)</Label>
                <InputGroup>
                  <Input
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="162.84"
                  />
                  <InputGroupAddon addonType="append">
                    <Button>Current</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md="5" className="my-4">
              <FormGroup>
                <Label for="amount">Future MCLS market price ($)</Label>
                <InputGroup>
                  <Input
                    type="text"
                    name="amount"
                    id="amount"
                    placeholder="162.84"
                  />
                  <InputGroupAddon addonType="append">
                    <Button>Current</Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className="my-5">
              <FormGroup>
                <Input
                  id="exampleRange"
                  name="range"
                  type="range"
                  className="rangeInput"
                  min="0"
                  max="365"
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
                <span>$0</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Current wealth</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>$0</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>MCLS rewards estimation</p>
              </Col>
              <Col xs="6" className="text-right">
                <span>0 MCLS</span>
              </Col>
            </Row>
            <Row className="account__table align-items-center my-2">
              <Col xs="6" className="text-left">
                <p>Potential return</p>
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

export default CalculatorComponent;
