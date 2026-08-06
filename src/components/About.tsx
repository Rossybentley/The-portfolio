import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "@/styles/about.css";

const highlights = [
  { label: "Focus", value: "Frontend Engineering" },
  { label: "Stack", value: "React & TypeScript" },
  { label: "Studying", value: "System Design" },
  { label: "Approach", value: "Design-first" },
];

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.15,
    },
  },
};

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I am</h2>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-sidebar glass-card"
            variants={sidebarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="about-avatar">
              <span>E</span>
            </div>
            <h3>Emeka</h3>
            <p className="about-role">Frontend Developer</p>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div key={item.label} className="about-highlight">
                  <span className="about-highlight-label">{item.label}</span>
                  <span className="about-highlight-value">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-content glass-card"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p>
              I'm a software engineer with a strong focus on frontend
              development, building fast, responsive, and user-friendly web
              applications with React, TypeScript, Next.js, HTML, and CSS. I
              enjoy turning ideas into polished digital experiences that are
              both visually appealing and easy to use.
            </p>

            <p>
              Beyond the frontend, I'm expanding my expertise into backend
              development with Node.js, Express, PostgreSQL, Prisma, and REST
              APIs. I'm also exploring AI integration to build smarter
              applications and learning how to design systems that are scalable,
              maintainable, and production-ready.
            </p>

            <p>
              I'm continuously improving my problem-solving skills by studying
              data structures, algorithms, and system design while sharpening my
              Git and collaborative development workflows. With a background in
              Business Administration, I also bring a business-first perspective
              to every project, ensuring the products I build solve real user
              and business problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
