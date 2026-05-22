import "../styles/projects.css";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <a href="{project.link}">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
