import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/img/metaclass-assets/logo.png";

import dashboardIcon from "../../assets/img/dashboard/dashboard.svg";
import accountIcon from "../../assets/img/dashboard/account.svg";
import calculatorIcon from "../../assets/img/dashboard/calculator.svg";
import nftsIcon from "../../assets/img/dashboard/nfts.svg";
import docsIcon from "../../assets/img/dashboard/docs.svg";
import swapIcon from "../../assets/img/dashboard/swap-dark.png";

const SideNav = () => {
  return (
    <>
      <div className="sidenav">
        <Link to="/" className="nav-link">
          <img
            src={logo}
            width="20%"
            height="auto"
            style={{ marginBottom: "5rem" }}
          />
        </Link>
        <Link to="/dashboard" className="nav-link">
          <img src={dashboardIcon} width="24px" height="auto" />
          &nbsp;Dashboard
        </Link>
        <Link to="/account" className="nav-link">
          <img src={accountIcon} width="24px" height="auto" />
          &nbsp; Account
        </Link>
        <Link to="/calculator" className="nav-link">
          <img src={calculatorIcon} width="24px" height="auto" />
          &nbsp; Calculator
        </Link>
        <a href="#section" className="nav-link">
          <img src={nftsIcon} width="24px" height="auto" />
          &nbsp; NFTs
        </a>
        <a href="#section" className="nav-link">
          <img
            src={swapIcon}
            width="24px"
            height="auto"
            style={{ fill: "#ffffff" }}
          />
          &nbsp; Swap
        </a>
        <a href="#section" className="nav-link">
          <img src={docsIcon} width="24px" height="auto" />
          &nbsp; Docs
        </a>
        <div className="socials__dashboard">
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
        </div>
      </div>
    </>
  );
};

export default SideNav;
