import React from "react";
import { Col, Container, Row } from "reactstrap";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import DashboardNav from "../components/Dashboard/DashboardNav";
import SideNav from "../components/SideNav/SideNav";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2" className="d-none d-md-block">
            <SideNav />
          </Col>
          <Col md="10" sm="12">
            <DashboardNav />
            <DashboardComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
