import "../styles/Hero.css";
import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Projects shipped" },
  { value: "8+", label: "Technologies" },
  { value: "100%", label: "Passion driven" },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Emeka</h1>
          <h2 className="hero-role">
            Frontend Developer crafting{" "}
            <span className="hero-highlight">pixel-perfect</span> web
            experiences
          </h2>

          <p className="hero-description">
            I turn ideas into fast, accessible, and visually polished interfaces
            using React, TypeScript, and modern CSS.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View my work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-orbit">
            <div className="hero-orbit-ring" />
            <div className="hero-orbit-core">
              <span className="hero-initials">E</span>
            </div>
            <div className="hero-orbit-tag hero-orbit-tag--1">React</div>
            <div className="hero-orbit-tag hero-orbit-tag--2">TypeScript</div>
            <div className="hero-orbit-tag hero-orbit-tag--3">CSS</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="hero-stat glass-card">
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
