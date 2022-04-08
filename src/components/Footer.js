import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row, Nav, NavItem, NavLink } from "reactstrap";
import "../assets/css/style.css";

// import { NavLink as Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import logoDark from "../assets/img/metaclass-assets/dark/logo.svg";
import logo from "../assets/img/metaclass-assets/light/logo.png";

const Footer = (props) => {
  const location = useLocation();
  if (location.pathname == "/staking") {
    return (
      <>
        <Container className="footer">
          <Row className="justify-content-center align-items-center border-bottom border-secondary border-1 py-5">
            <Col md="6" sm="4" className="mt-4">
              <Link to="/" className="nav-link footer__logolink">
                {/* <img src={logo} className="footer__logo" /> */}
                <img
                  src={props.theme == "light" ? logoDark : logo}
                  height="35px"
                  width="auto"
                  className="footer__logo"
                />
              </Link>
            </Col>
            <Col md="6" sm="8" className="text-right">
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/metaclassbsc/" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://metaclassbsc.medium.com/" target="_blank">
                <i class="fa-brands fa-medium"></i>
              </a>
              <a href="https://twitter.com/metaclassbsc" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center border-bottom border-secondary border-1 py-5">
            <Nav className="navlist text-center justify-content-center">
              <NavItem>
                <Link className="nav-link" to="/staking">
                  Staking
                </Link>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="/whitepaper.pdf" target="_blank">
                  Read Lightpaper
                </a>
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
  } else {
    return (
      <>
        <Container className="footer">
          <Row className="justify-content-center align-items-center border-bottom border-secondary border-1 py-5">
            <Col md="6" sm="4" className="mt-4">
              <Link to="/" className="nav-link footer__logolink">
                {/* <img src={logo} className="footer__logo" /> */}
                <img
                  src={props.theme == "light" ? logoDark : logo}
                  height="35px"
                  width="auto"
                  className="footer__logo"
                />
              </Link>
            </Col>
            <Col md="6" sm="8" className="text-right">
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/metaclassbsc/" target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://metaclassbsc.medium.com/" target="_blank">
                <i class="fa-brands fa-medium"></i>
              </a>
              <a href="https://twitter.com/metaclassbsc" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center border-bottom border-secondary border-1 py-5">
            <Nav className="navlist text-center justify-content-center">
              <NavItem>
                <ScrollLink
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="/seller"
                >
                  Sellers
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="/buyer__section"
                >
                  Buyers
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="/market__place"
                >
                  Market
                </ScrollLink>
              </NavItem>
              <NavItem>
                <ScrollLink
                  className="nav-link"
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="/tokenDist"
                >
                  Distribution
                </ScrollLink>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/staking">
                  Staking
                </Link>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="/whitepaper.pdf" target="_blank">
                  Read Lightpaper
                </a>
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
  }
};

export default Footer;
