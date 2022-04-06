import React from "react";
import { Col, Container, Row } from "reactstrap";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import SideNav from "../components/SideNav/SideNav";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2">
            <SideNav />
          </Col>
          <Col md="10">
            <DashboardComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
