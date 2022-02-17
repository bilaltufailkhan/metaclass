import React from "react";
import "../assets/css/style.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

import logo from "../assets/img/metaclass-logo.svg";

const MainNav = () => {
  return (
    <>
      <Navbar className="navbar fixed-top py-3">
        <Container className="navbar__inner">
          <NavbarBrand href="/" className="logo">
            <img src={logo} height="35px" width="auto" />
          </NavbarBrand>
          <Nav className="ml-auto navlist">
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
          </Nav>
          <Nav className="ml-auto navlist">
            <NavItem className="btn__lightPaper">
              <NavLink href="/components/">Read Litepaper</NavLink>
            </NavItem>
            <NavItem className="mode__changer">
              <NavLink>
                <input type="checkbox" id="switch" />
                <label for="switch">Mode</label>
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
