import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import "@/styles/navbar.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => {
      if (s) observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container nav-content">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">E</span>
          Emeka
        </a>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(!menuOpen);
          }}
        >
          <span />
          <span />
          <span />
        </div>

        <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <a
                href={link.href}
                onClick={closeMenu}
                className={activeSection === link.href ? "active" : ""}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    className="nav-active-indicator"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
          <li className="nav-cta">
            <a
              href="#contact"
              className="btn-primary nav-hire-btn"
              onClick={closeMenu}
            >
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
