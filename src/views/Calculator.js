import React from "react";
import { Col, Container, Row } from "reactstrap";
import CalculatorComponent from "../components/Dashboard/CalculatorComponent";
import SideNav from "../components/SideNav/SideNav";

const Calculator = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2">
            <SideNav />
          </Col>
          <Col md="10">
            <CalculatorComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Calculator;
