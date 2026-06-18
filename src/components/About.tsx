import "../styles/about.css";
import { motion } from "framer-motion";

const highlights = [
  { label: "Focus", value: "UI Engineering" },
  { label: "Stack", value: "React & TypeScript" },
  { label: "Approach", value: "Design-first" },
];

function About() {
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I am a frontend developer with a passion for creating beautiful
              and functional user interfaces. I have experience working with
              React, TypeScript, and CSS, and I am always eager to learn new
              technologies and improve my skills.
            </p>
            <p>
              In my free time, I enjoy exploring new design trends and
              experimenting with different styles to create unique and engaging
              web experiences. My background in UI/UX design helps me build
              intuitive interfaces that feel as good as they look.
            </p>
            <p>
              I am committed to delivering high-quality work and collaborating
              effectively with teams to bring ideas to life. I am also learning
              data structures and algorithms to become a more well-rounded
              developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
