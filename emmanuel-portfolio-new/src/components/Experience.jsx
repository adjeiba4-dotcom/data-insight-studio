function Experience() {
  const experiences = [
    {
      period: "2021 – Present",
      title: "Filling Station Manager",
      company: "GASO Petroleum Ltd",
      description:
        "Lead daily station operations, manage staff, oversee fuel inventory, monitor stock reconciliation, prepare financial reports, and improve operational performance.",
    },
    {
      period: "2025 – Present",
      title: "Junior Data Analyst",
      company: "Personal Data Analytics Portfolio",
      description:
        "Develop interactive Power BI dashboards, analyze data with Excel and SQL, and create business intelligence reports to support decision-making.",
    },
    {
      period: "2020",
      title: "Bachelor of Business Administration (Accounting)",
      company: "Valley View University",
      description:
        "Graduated with a strong foundation in accounting, finance, auditing, and business management.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2>Professional Experience</h2>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timeline-item" key={exp.title}>
            <div className="timeline-date">
              {exp.period}
            </div>

            <div className="timeline-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;