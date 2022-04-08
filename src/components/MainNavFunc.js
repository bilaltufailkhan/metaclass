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
import { NavLink as Link, useHistory, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// import litepaper from "/whitepaper.pdf";

const MainNav = (props) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const { checked, switchTheme } = props;

  const location = useLocation();

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
    if (location.pathname == "/") {
      return (
        <>
          <Navbar className="navbar py-3" checked={checked}>
            <Container className="navbar__inner d-flex align-items-center">
              <Link to="/" className="navbar-brand logo">
                <img
                  src={props.theme == "light" ? logoDark : logo}
                  height="45px"
                  width="auto"
                />
              </Link>
              <Nav className="ml-auto navlist">
                <NavItem>
                  <ScrollLink
                    to="seller"
                    smooth={true}
                    spy={true}
                    duration={500}
                    className="nav-link"
                  >
                    Sellers
                  </ScrollLink>
                </NavItem>
                <NavItem>
                  <ScrollLink
                    to="buyer__section"
                    smooth={true}
                    spy={true}
                    duration={500}
                    className="nav-link"
                  >
                    Buyers
                  </ScrollLink>
                </NavItem>
                <NavItem>
                  <ScrollLink
                    to="market__place"
                    smooth={true}
                    spy={true}
                    duration={500}
                    className="nav-link"
                  >
                    Market
                  </ScrollLink>
                </NavItem>
                <NavItem>
                  <ScrollLink
                    to="tokenDist"
                    smooth={true}
                    spy={true}
                    duration={500}
                    className="nav-link"
                  >
                    Distribution
                  </ScrollLink>
                </NavItem>
                <NavItem>
                  <a
                    className="nav-link"
                    href="/whitepaper.pdf"
                    target="_blank"
                  >
                    Litepaper
                  </a>
                </NavItem>
              </Nav>
              <Nav className="ml-auto navlist">
                <NavItem className="btn__lightPaper">
                  <a
                    href="https://app.metaclass.market"
                    className="lightPaper__link py-3 px-5 mr-5"
                  >
                    Open App
                  </a>
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
    } else if (location.pathname == "/staking") {
      return (
        <>
          <Navbar className="navbar py-3" checked={checked}>
            <Container className="navbar__inner d-flex align-items-center">
              <Link to="/" className="navbar-brand logo">
                <img
                  src={props.theme == "light" ? logoDark : logo}
                  height="35px"
                  width="auto"
                />
              </Link>
              <Nav className="ml-auto navlist">
                <NavItem>
                  <Link className="nav-link" id="staking" to="/staking">
                    Staking
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="ml-auto navlist">
                <NavItem className="btn__lightPaper">
                  <a
                    href="https://app.metaclass.market"
                    className="lightPaper__link p-3 mr-5"
                  >
                    Open App
                  </a>
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
    }
  } else {
    if (location.pathname == "/") {
      return (
        <>
          <Container>
            <div className="drawer__nav py-4 container">
              <div className="logo">
                <img
                  src={props.theme == "light" ? logoDark : logo}
                  height="30px"
                  width="auto"
                />
              </div>
              <div className="mode__changer">
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
                  <li className="drawer__item text-end">
                    <ScrollLink
                      to="seller"
                      smooth={true}
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Sellers
                    </ScrollLink>
                  </li>
                  <li className="drawer__item">
                    <ScrollLink
                      to="buyer__section"
                      smooth={true}
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Buyers
                    </ScrollLink>
                  </li>
                  <li className="drawer__item">
                    <ScrollLink
                      to="market__place"
                      smooth={true}
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Market
                    </ScrollLink>
                  </li>
                  <li className="drawer__item">
                    <Link className="nav-link" to="/staking">
                      Staking
                    </Link>
                  </li>
                  <li className="drawer__item">
                    <ScrollLink
                      to="tokenDist"
                      smooth={true}
                      spy={true}
                      duration={500}
                      className="nav-link"
                    >
                      Distribution
                    </ScrollLink>
                  </li>
                  <li className="drawer__item">
                    <Link
                      href="https://app.metaclass.market"
                      className="openApp__btn"
                    >
                      Open App
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </>
      );
    } else if (location.pathname == "/staking") {
      return (
        <>
          <Container>
            <div className="drawer__nav py-4 container">
              <div className="logo">
                <Link to="/">
                  <img
                    src={props.theme == "light" ? logoDark : logo}
                    height="30px"
                    width="auto"
                  />
                </Link>
              </div>
              <div className="mode__changer">
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
                    <Link className="nav-link" to="/staking">
                      Staking
                    </Link>
                  </li>
                  <li className="drawer__item">
                    <Link
                      href="https://app.metaclass.market"
                      className="openApp__btn"
                    >
                      Open App
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </>
      );
    }
  }
};

export default MainNav;
