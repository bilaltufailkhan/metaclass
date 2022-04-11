import React from "react";
import { Link } from "react-router-dom";
import { Container, Tooltip } from "reactstrap";
import logo from "../../assets/img/metaclass-assets/logo.png";

import dashboardIcon from "../../assets/img/dashboard/dashboard.svg";
import accountIcon from "../../assets/img/dashboard/account.svg";
import calculatorIcon from "../../assets/img/dashboard/calculator.svg";
import nftsIcon from "../../assets/img/dashboard/nfts.svg";
import docsIcon from "../../assets/img/dashboard/docs.svg";
import swapIcon from "../../assets/img/dashboard/swap-dark.png";

import { useWeb3React } from "@web3-react/core";
import { useAddress } from "../../utils/useAddress";

const SideNav = () => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const toggleToolTip = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  return (
    <>
      <div className="sidenav">
        <a href="https://metaclass.market" className="nav-link">
          <img
            src={logo}
            width="40%"
            height="auto"
            style={{ marginBottom: "3rem", marginLeft: "3rem" }}
          />
        </a>
        <p style={{ color: "#efefef", textAlign: "left" }}>{account}</p>
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
        <Link to="/" className="nav-link">
          <img src={nftsIcon} width="24px" height="auto" />
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
          className="nav-link"
        >
          <img
            src={swapIcon}
            width="24px"
            height="auto"
            style={{ fill: "#ffffff" }}
          />
          &nbsp; Swap
        </a>
        <a href="https://metaclass.market/whitepaper.pdf" className="nav-link">
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
