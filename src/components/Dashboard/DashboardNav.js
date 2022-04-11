import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Col, Container, Nav, Navbar, NavItem, Row } from "reactstrap";

import { Modal } from "react-bootstrap";

import logo from "../../assets/img/metaclass-assets/logo.png";
import { useWeb3React } from "@web3-react/core";

import { injected, walletconnect } from "../../config/connectors";

import walletConnectImg from "../../assets/img/metaclass-assets/walletconnect-circle-blue.svg";
import metaMaskImg from "../../assets/img/metaclass-assets/metamask-fox.svg";

const DashboardNav = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isOpen, setIsOpen] = React.useState(true);

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

  const [modalShow, setModalShow] = useState(false);

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  // MetaMask Connection
  async function injectWeb3() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  // WalletConnect Connection
  async function walletConnect() {
    try {
      await activate(walletconnect);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function walletDisconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    if (account) {
      setModalShow(false);
    }
  }, [account]);

  // Component Desing Starts Here

  if (windowWidth > 992) {
    return (
      <>
        {/* Wallet Modal */}
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          centered
          className="modal"
        >
          <Modal.Body className="text-center pb-5 bg-dark text-white rounded">
            <span className="logo"></span>
            <h4 className="heading-4 mt-4 mb-0">Connect Wallet</h4>
            <h5 className="mt-0">To start using MetaClass</h5>
            <div className="col-8 mb-4 mt-4 m-auto">
              {/* <ul className="list-group"> */}
              <button
                className="btn btn-danger my-3 btn-block btn-lg"
                onClick={() => {
                  injectWeb3();
                }}
              >
                <span className="icon-wallet">
                  <img src={metaMaskImg} width={26} />
                </span>
                {` `}
                <span>Metamask</span>
              </button>
              <button
                className="btn btn-primary my-3 btn-block btn-lg"
                onClick={() => {
                  walletConnect();
                }}
              >
                <span className="icon-wallet iw-mt">
                  <img src={walletConnectImg} width={26} />
                </span>
                {` `}
                <span>WalletConnect</span>
              </button>
              {/* </ul> */}
            </div>

            <p className="p-0 m-0">Need help connecting a wallet?</p>
            <p className="green-anchor p-0 m-0">
              <a href="#">Learn more about wallets</a>
            </p>
          </Modal.Body>
        </Modal>
        {/* Modal End */}
        <Container>
          <Row>
            <Col md="12">
              <Navbar expand="md" className="dashboard__nav">
                <Nav className="ml-auto">
                  {!active ? (
                    <NavItem>
                      <button
                        onClick={() => setModalShow(true)}
                        className="nav-link dbnav__btn"
                      >
                        Connect Account
                      </button>
                    </NavItem>
                  ) : (
                    <NavItem>
                      <button
                        onClick={walletDisconnect}
                        className="nav-link dbnav__btn"
                      >
                        Disconnect
                      </button>
                    </NavItem>
                  )}
                  )
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
            <a href="https://metaclass.market" className="nav-link">
              <img src={logo} height="30px" width="auto" />
            </a>
          </div>
          <div className="bread__crumb">
            <button className="btn__drawer nav-link" onClick={handleDrawer}>
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
                <Link to="/">Dashboard</Link>
              </li>
              <li className="drawer__item text-end">
                <Link to="/account">Account</Link>
              </li>
              <li className="drawer__item text-end">
                <Link to="/calculator">Calculator</Link>
              </li>
              <li className="drawer__item">
                <Link to="/dashboard">NFTs</Link>
              </li>
              <li className="drawer__item">
                <a
                  href="https://pancakeswap.finance/"
                  target="_blank"
                  className="nav-link"
                >
                  Swap
                </a>
              </li>
              <li className="drawer__item">
                <a
                  className="nav-link"
                  href="https://metaclass.market/whitepaper.pdf"
                >
                  Docs
                </a>
              </li>
              <li className="drawer__item">
                {!active ? (
                  <button onClick={walletConnect} className="openApp__btn">
                    Connect Wallet
                  </button>
                ) : (
                  <button onClick={walletDisconnect} className="openApp__btn">
                    Disconnect
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardNav;
