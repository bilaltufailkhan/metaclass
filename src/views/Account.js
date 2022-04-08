import React from "react";
import { Col, Container, Row } from "reactstrap";
import AccountComponent from "../components/Dashboard/AccountComponent";
import DashboardNav from "../components/Dashboard/DashboardNav";
import SideNav from "../components/SideNav/SideNav";

const Account = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2" className="d-none d-md-block">
            <SideNav />
          </Col>
          <Col md="10" sm="12" className="">
            <DashboardNav />
            <AccountComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
