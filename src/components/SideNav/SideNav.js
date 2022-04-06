import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/img/metaclass-assets/logo.png";

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
          Dashboard
        </Link>
        <Link to="/account" className="nav-link">
          Account
        </Link>
        <Link to="/calculator" className="nav-link">
          Calculator
        </Link>
        <a href="#section" className="nav-link">
          NFTs
        </a>
        <a href="#section" className="nav-link">
          Docs
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
