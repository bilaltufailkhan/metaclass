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

import logoDark from "../assets/img/metaclass-assets/dark/logo.svg";
import logo from "../assets/img/metaclass-assets/light/logo.png";

import Switch from "react-switch";

import useLocalStorage from "use-local-storage";

const MainNav = (props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const { checked, switchTheme } = props;

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    return () => {
      window.addEventListener("resize", handleResize);
    };
  });

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (windowWidth > 992) {
    return (
      <>
        <Navbar className="navbar fixed-top py-3" checked={checked}>
          <Container className="navbar__inner d-flex align-items-center">
            <NavbarBrand href="/" className="logo">
              <img
                src={props.theme == "light" ? logoDark : logo}
                height="35px"
                width="auto"
              />
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
                <NavLink
                  href="/components/"
                  className="lightPaper__link p-3 mr-5"
                >
                  Read Litepaper
                </NavLink>
              </NavItem>
              <NavItem className="mode__changer py-3">
                <i class="fa-solid fa-moon"></i>
                <div className="mode__button">
                  <Switch
                    onChange={switchTheme}
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
  } else {
    return (
      <>
        <Container>
          <div className="drawer__nav py-4 container">
            <div className="logo">
              {/* <img src={logo} width="auto" height="41px" className="logo" /> */}
              <img
                src={props.theme == "light" ? logoDark : logo}
                height="35px"
                width="auto"
              />
            </div>
            <div className="bread__crumb">
              <button className="btn__drawer" onClick={handleDrawer}>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div className={!isOpen ? "drawer" : "drawer__off"}>
              <ul className="drawer__list">
                <li className="drawer__item">
                  <button onClick={handleDrawer} id="btn__xmark">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </li>
                <li className="drawer__item">
                  <a href="#">Sellers</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Buyers</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Market</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Staking</a>
                </li>
                <li className="drawer__item">
                  <a href="#">Distribution</a>
                </li>
                <li className="drawer__item">
                  <button href="#" className="openApp__btn">
                    Read Litepaper
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </>
    );
  }
};

export default MainNav;
