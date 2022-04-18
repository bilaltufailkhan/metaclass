import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "reactstrap";
import logo from "../../assets/img/metaclass-assets/logo.png";

import dashboardIcon from "../../assets/img/dashboard/dashboard.svg";
import accountIcon from "../../assets/img/dashboard/account.svg";
import calculatorIcon from "../../assets/img/dashboard/calculator.svg";
import nftsIcon from "../../assets/img/dashboard/nfts.svg";
import docsIcon from "../../assets/img/dashboard/docs.svg";
import swapIcon from "../../assets/img/dashboard/swap-dark.png";

import { useWeb3React } from "@web3-react/core";

const SideNav = () => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const toggleToolTip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const { account } =
    useWeb3React();

  const formatAddress = (str) => {
    return str.length > 41
      ? str.substring(0, 4) + "..." + str.substring(38, 42)
      : str;
  };

  return (
    <>
      <div className="sidenav">
        <a href="https://metaclass.market" className="nav-link">
          <img
            src={logo}
            width="40%"
            height="auto"
            style={{ marginBottom: "3rem", marginLeft: "3rem" }}
            alt="Logo"
          />
        </a>
        <p style={{ color: "#efefef", textAlign: "left" }}>
          {!account ? "" : formatAddress(account)}
        </p>
        <Link to="/dashboard" className="nav-link">
          <img src={dashboardIcon} width="24px" height="auto" alt="Dashboard Icon" />
          &nbsp;Dashboard
        </Link>
        <Link to="/account" className="nav-link">
          <img src={accountIcon} width="24px" height="auto" alt="User Icon" />
          &nbsp; Account
        </Link>
        <Link to="/calculator" className="nav-link">
          <img src={calculatorIcon} width="24px" height="auto" alt="Calculator Icon" />
          &nbsp; Calculator
        </Link>
        <Link to="/" className="nav-link">
          <img src={nftsIcon} width="24px" height="auto" alt="NFTs Icon" />
          &nbsp;{" "}
          <span id="DisabledAutoHideExample" className="text-muted">
            NFTs
          </span>
          <Tooltip
            placement="right"
            isOpen={tooltipOpen}
            autohide={false}
            target="DisabledAutoHideExample"
            toggle={toggleToolTip}
          >
            Coming Soon!
          </Tooltip>
        </Link>
        <a
          href="https://pancakeswap.finance/"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          <img
            src={swapIcon}
            width="24px"
            height="auto"
            style={{ fill: "#ffffff" }}
            alt="Swap icon"
          />
          &nbsp; Swap
        </a>
        <a href="https://metaclass.market/whitepaper.pdf" className="nav-link">
          <img src={docsIcon} width="24px" height="auto" alt="Documents icon" />
          &nbsp; Docs
        </a>
        <div className="socials__dashboard">
          <a href="https://www.facebook.com/metaclassbsc/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/metaclassbsc/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://metaclassbsc.medium.com/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-medium"></i>
          </a>
          <a href="https://twitter.com/metaclassbsc" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
