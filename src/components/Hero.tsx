import "../styles/Hero.css";
import { motion } from "framer-motion";
function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="container hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-subtitle">Frontend Developer</p>
        <h1>Building modern and responsive web experiences. </h1>

        <p className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Contact Me</button>
          </a>
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
