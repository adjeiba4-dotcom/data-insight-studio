function Certifications() {

  const certs = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
    },
    {
      title: "ALX Data Analytics Programme",
      issuer: "ALX Africa",
    },
    {
      title: "AI Literacy for Productivity",
      issuer: "ALX Africa",
    },
    {
      title: "Institute of Chartered Accountants, Ghana (ICAG) – Level II",
      issuer: "ICAG",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>

      <div className="cert-grid">
        {certs.map((cert) => (
          <div className="cert-card" key={cert.title}>
            <h3>🏆 {cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;