import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { SkillIcon } from "./Icons";
import "@/styles/skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "React" },
      { name: "TypeScript", icon: "TypeScript" },
      { name: "JavaScript", icon: "JavaScript" },
      { name: "HTML", icon: "HTML" },
      { name: "CSS", icon: "CSS" },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "UI/UX Design", icon: "UI/UX Design" },
      { name: "GitHub", icon: "GitHub" },
      { name: "Data Structures", icon: "Data Structures" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
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
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="skills-group glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="skills-group-title">{group.title}</h3>
              <motion.div
                className="skills-cards"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="skill-icon">
                      <SkillIcon name={skill.icon} size={28} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
