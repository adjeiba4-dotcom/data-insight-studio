import profilePic from "../assets/emmanuel.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
   <section className="hero" id="home">
      <div className="hero-text">
        <h1>Emmanuel Adjei Baffour</h1>

<h2>Junior Data Analyst | Accounting Professional</h2>

<h4 className="subtitle">
  📍 Based in Ghana | Open to Relocation across Europe
</h4>

<p className="hero-description">
  I am a Junior Data Analyst with a background in Accounting and business
  operations. I transform raw data into actionable insights using Power BI,
  SQL, Excel, Python, and Google Sheets to support smarter business
  decisions and improve operational performance.
</p>

<div className="hero-buttons">
  <a href="#projects" className="btn">
    View Projects
  </a>

  <a href="/Emmanuel_Adjei_Baffour_CV.pdf" className="btn btn-outline" download>
    Download cv
    </a>

          <a href="#contact" className="contact-btn">
  Contact Me
</a>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/emmanuel-adjeibaffour/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/adjeiba4-dotcom"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:adjeiba4@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profilePic} alt="Emmanuel Adjei Baffour" />
      </div>
    </section>
  );
}

export default Hero;