import { motion } from "framer-motion";
import { Github, LinkedIn, Twitter } from "./Icons";
import "@/styles/footer.css";

const socialLinks = [
  { icon: Github, href: "https://github.com/Rossybentley", label: "GitHub" },
  {
    icon: LinkedIn,
    href: "https://www.linkedin.com/in/egejuru-emeka-9b048a231?",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/delta21cc", label: "X" },
];

export default function Footer() {
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

        <div className="footer-social">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={link.label}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
        </div>

        <p className="footer-copy">
          &copy; {year} Emeka. Built with React & TypeScript.
        </p>
      </div>
    </footer>
  );
}
