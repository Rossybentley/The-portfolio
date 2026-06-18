import "../styles/skills.css";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "TypeScript", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "UI/UX Design", level: 70 },
      { name: "GitHub", level: 60 },
      { name: "Data Structures", level: 25 },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & tools</h2>
          <p className="section-subtitle">
            Technologies I use to build fast, accessible, and polished web
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="skills-group glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="skills-group-title">{group.title}</h3>
              <div className="skills-list">
                {group.skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: groupIndex * 0.1 + index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
