import "../styles/skills.css";

function Skills() {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "CSS", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Data Structures & Algorithms", level: "Beginner" },
    { name: "github", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
