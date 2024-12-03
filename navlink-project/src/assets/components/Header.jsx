import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary shadow px-5">
      <div className="container-fluid d-flex align-items-center justify-content-between px-5 fw-bold">
        <a className="navbar-brand" href="/">
          Muhammad Umair
        </a>
        <div className="navbar-nav d-flex gap-4">
          <Link className="" to="/">
            Home
          </Link>
          <Link className="text-decoration-none" to="/About">
            About
          </Link>
          <Link className="text-decoration-none" to="/Contact">
            Contact
          </Link>
          <Link className="text-decoration-none" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
