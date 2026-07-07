import fuelDashboard from "../assets/fuel-dashboard.png";
import financialDashboard from "../assets/financial-dashboard.png";
import inventoryDashboard from "../assets/inventory-dashboard.png";
import bankingDashboard from "../assets/banking-dashboard.png";

function Projects() {
  const projects = [
    {
      image: fuelDashboard,
      title: "Fuel Station Operations Dashboard",
      description:
        "Interactive Power BI dashboard for monitoring fuel sales, revenue, operational KPIs and business performance.",
      tech: "Power BI • Excel • DAX",
    },
    {
      image: financialDashboard,
      title: "Financial Performance Dashboard",
      description:
        "Comprehensive financial reporting dashboard analyzing revenue, expenses and profitability.",
      tech: "Power BI • Excel",
    },
    {
      image: inventoryDashboard,
      title: "Inventory & Tank Variance Dashboard",
      description:
        "Tracks inventory movement, deliveries, stock reconciliation and tank variance.",
      tech: "Power BI • Excel",
    },
    {
      image: bankingDashboard,
      title: "Cashflow, Banking & Credit Dashboard",
      description:
        "Dashboard for monitoring banking performance, customer credit and cashflow reconciliation.",
      tech: "Power BI • Excel",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">{project.tech}</div>

              <div className="project-buttons">
                <button>View Project</button>
                <button>GitHub</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;