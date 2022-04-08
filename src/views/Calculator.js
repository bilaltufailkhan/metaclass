import React from "react";
import { Col, Container, Row } from "reactstrap";
import CalculatorComponent from "../components/Dashboard/CalculatorComponent";
import DashboardNav from "../components/Dashboard/DashboardNav";
import SideNav from "../components/SideNav/SideNav";

const Calculator = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2" className="d-none d-md-block">
            <SideNav />
          </Col>
          <Col md="10" sm="12">
            <DashboardNav />
            <CalculatorComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Calculator;
