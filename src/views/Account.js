import React from "react";
import { Col, Container, Row } from "reactstrap";
import AccountComponent from "../components/Dashboard/AccountComponent";
import SideNav from "../components/SideNav/SideNav";

const Account = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2">
            <SideNav />
          </Col>
          <Col md="10" className="py-5 my-5">
            <AccountComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;
