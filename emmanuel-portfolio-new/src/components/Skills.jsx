function Skills() {
  const skills = [
    { name: "Power BI", level: "90%" },
    { name: "Excel", level: "95%" },
    { name: "SQL", level: "80%" },
    { name: "React", level: "70%" },
    { name: "HTML & CSS", level: "85%" },
    { name: "JavaScript", level: "70%" },
    { name: "Data Analysis", level: "90%" },
    { name: "Accounting", level: "95%" }
  ];

  return (
    <section className="skills" id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;