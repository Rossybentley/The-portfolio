import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "./Icons";
import "../styles/hero.css";

const stats = [
  { value: "3+", label: "Projects shipped" },
  { value: "8+", label: "Technologies" },
  { value: "100%", label: "Passion driven" },
];

const orbitTags = ["React", "TypeScript", "CSS"];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.p className="hero-greeting" variants={itemVariants}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Emeka
          </motion.h1>

          <motion.h2 className="hero-role" variants={itemVariants}>
            Frontend Developer crafting{" "}
            <span className="hero-highlight">polished</span> web experiences
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            I turn ideas into fast, accessible, and visually polished interfaces
            using React, TypeScript, and modern CSS.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="btn-primary">
              View my work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-orbit">
            <motion.div
              className="hero-orbit-ring"
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="hero-orbit-ring hero-orbit-ring--inner" />
            <motion.div
              className="hero-orbit-core"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.1)",
                  "0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(139, 92, 246, 0.15)",
                  "0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(139, 92, 246, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="hero-initials">E</span>
            </motion.div>
            {orbitTags.map((tag, i) => (
              <motion.div
                key={tag}
                className={`hero-orbit-tag hero-orbit-tag--${i + 1}`}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="hero-stat glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          >
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
