import { motion, useMotionValue, useTransform } from "framer-motion";
import { ExternalLink, Github } from "./Icons";
import { projects } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured,
}: {
  project: (typeof projects)[number];
  index: number;
  featured: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      className={`project-card glass-card ${featured ? "project-card--featured" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
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
            <ExternalLink size={14} />
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
        <div className="project-footer">
          <div className="tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-social-link"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-social-link"
                aria-label="GitHub repository"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
