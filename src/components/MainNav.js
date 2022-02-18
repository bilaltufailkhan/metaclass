import React, { useState } from "react";
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
import Switch from "react-switch";

const MainNav = () => {
  const [checked, setChecked] = useState(false);

  const onCheckClicked = (checked) => {
    setChecked(checked);
  };
  return (
    <>
      <Navbar className="navbar fixed-top py-3">
        <Container className="navbar__inner d-flex align-items-center">
          <NavbarBrand href="/" className="logo">
            <img src={logo} height="35px" width="auto" />
          </NavbarBrand>
          <Nav className="ml-auto navlist">
            <NavItem>
              <NavLink href="/components/" className="nav__link">
                Sellers
              </NavLink>
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
              <NavLink
                href="/components/"
                className="lightPaper__link p-3 mr-5"
              >
                Read Litepaper
              </NavLink>
            </NavItem>
            <NavItem className="mode__changer py-3 px-2">
              <i class="fa-solid fa-moon"></i>
              <div className="mode__button">
                <Switch
                  onChange={onCheckClicked}
                  checked={checked}
                  className="react-switch"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  offColor="#12131d"
                  onColor="#12131d"
                  handleDiameter={11}
                  width={35}
                  height={20}
                />
              </div>
              <i class="fa-solid fa-sun"></i>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
