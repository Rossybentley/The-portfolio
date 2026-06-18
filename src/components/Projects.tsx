import "../styles/projects.css";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A collection of projects that showcase my approach to clean code,
            responsive design, and user-focused development.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`project-card glass-card ${index === 0 ? "project-card--featured" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary project-link-btn"
                  >
                    View live site
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 12L12 4M12 4H6M12 4v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-body">
                <div className="project-meta">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
