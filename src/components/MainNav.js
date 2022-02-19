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

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true,
      checked: false,
      windowWidth: window.innerWidth,
    };
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.handleResize);
  };

  componentWillUnmount = () => {
    window.addEventListener("resize", this.handleResize);
  };

  handleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });

    console.log(this.state);
  };

  onCheckClicked = (checked) => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { windowWidth } = this.state;
    if (windowWidth > 992) {
      return (
        <>
          <Navbar className="navbar fixed-top py-3">
            <Container className="navbar__inner d-flex align-items-center">
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
                      onChange={this.onCheckClicked}
                      checked={this.state.checked}
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
                <img src={logo} width="auto" height="41px" className="logo" />
              </div>
              <div className="bread__crumb">
                <button className="btn__drawer" onClick={this.handleDrawer}>
                  <i class="fa-solid fa-bars"></i>
                </button>
              </div>
              <div className={!this.state.isOpen ? "drawer" : "drawer__off"}>
                <ul className="drawer__list">
                  <li className="drawer__item">
                    <button onClick={this.handleDrawer} id="btn__xmark">
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
  }
}

export default MainNav;
