import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import "../assets/css/style.css";

import logo from "../assets/img/metaclass-logo.svg";

const Footer = () => {
  return (
    <>
      <Container className="footer">
        <Row className="justify-content-center align-items-center border-bottom border-secondary border-1 py-5">
          <Col xs="6">
            <a>
              <img src={logo} height="35px" width="auto" />
            </a>
          </Col>
          <Col xs="6" className="text-right">
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-medium"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center border-bottom border-secondary border-1 py-5">
          <Nav className="navlist text-center justify-content-center">
            <NavItem>
              <NavLink href="/components/">Sellers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Buyers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Market</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Distribution</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Staking</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Read Lightpaper</NavLink>
            </NavItem>
          </Nav>
        </Row>
        <Row className="py-5 footer__bottom">
          <Col xs="6">
            <p>2022 &copy; MetaClass. All rights reserved</p>
          </Col>
          <Col xs="6" className="text-right">
            <a href="#">Terms {"&"} Conditions</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
