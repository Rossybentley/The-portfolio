import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="logo-mark">E</span>
            Emeka
          </a>
          <p>Frontend Developer crafting modern web experiences.</p>
        </div>

        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer-copy">
          &copy; {year} Emeka. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
