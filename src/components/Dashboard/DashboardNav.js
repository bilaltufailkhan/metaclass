import React from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

import { Col, Container, Nav, Navbar, NavItem, Row } from "reactstrap";

import logo from "../../assets/img/metaclass-assets/logo.png";

const DashboardNav = (props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isOpen, setIsOpen] = React.useState(true);

  const [errorMessage, setErrorMessage] = React.useState(null);
  const [defaultAccount, setDefaultAccount] = React.useState(null);
  const [userBalance, setUserBalance] = React.useState(null);

  const defaultAddress = "0xa18bdf653018166e58319dee3487f72f13147f38";

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("Install Metamask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount);
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

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
        <Container>
          <Row>
            <Col md="12">
              <Navbar expand="md" className="dashboard__nav">
                <Nav className="ml-auto">
                  {/* <NavItem>
                    <button className="nav-link dbnav__btn">MCLS</button>
                  </NavItem> */}
                  <NavItem>
                    <button
                      onClick={connectWalletHandler}
                      className="nav-link dbnav__btn"
                    >
                      Connect Wallet
                    </button>
                  </NavItem>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <div className="drawer__nav py-4 container">
          <div className="logo">
            <Link to="/">
              <img src={logo} height="30px" width="auto" />
            </Link>
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
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="drawer__item text-end">
                <Link to="/account">Account</Link>
              </li>
              <li className="drawer__item text-end">
                <Link to="/calculator">Calculator</Link>
              </li>
              <li className="drawer__item">
                <Link to="/dashboard" className="nav-link">
                  NFTs
                </Link>
              </li>
              <li className="drawer__item">
                <Link to="/dashboard" className="nav-link">
                  Swap
                </Link>
              </li>
              <li className="drawer__item">
                <Link className="nav-link" to="/dashboard">
                  Docs
                </Link>
              </li>
              <li className="drawer__item">
                <Link to="/dashboard" className="nav-link">
                  MCLS
                </Link>
              </li>
              <li className="drawer__item">
                <Link to="/" target="_blank" className="openApp__btn">
                  Connect Wallet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardNav;
