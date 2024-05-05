import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/icons/vite-svgrepo-com.svg";

import Container from "./Container.jsx";
import Image from "./Image.jsx";

const Navbar = (props) => {
  return (
    <header className="header bg-dark text-light py-4">
      <Container>
        <div className="d-flex flex-column justify-content-center gap-4">
          <Image
            src={logo}
            alt="Website Logo Mark (Vite)"
            className="header__logo"
          />
          <nav className="nav nav-pills justify-content-center gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/characters" className="nav-link text-light">
                Characters
              </Link>
            </li>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
