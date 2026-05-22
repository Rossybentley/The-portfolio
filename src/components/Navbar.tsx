import "../styles/navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2 className="logo">Emeka</h2>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          <li>
            {" "}
            <a href="#">Home</a>
          </li>
          <li>
            {" "}
            <a href="#about">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#skills">Skills</a>{" "}
          </li>
          <li>
            {" "}
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
