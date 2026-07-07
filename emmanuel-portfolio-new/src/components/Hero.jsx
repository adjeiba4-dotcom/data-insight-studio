import profilePic from "../assets/emmanuel.jpg";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
   <section className="hero" id="home">
      <div className="hero-text">
        <h1>Emmanuel Adjei Baffour</h1>

<h3>Junior Data Analyst</h3>

<h4 className="subtitle">
  Power BI • SQL • Excel • Business Intelligence
</h4>

<p>
  I am a Junior Data Analyst with a background in Accounting and
  Operations Management. I build interactive Power BI dashboards,
  analyze data using Excel and SQL, and help organizations make
  smarter, data-driven decisions.
</p>
        <div className="hero-buttons">
          <a
  href="/files/Emmanuel_Adjei_Baffour_CV.pdf"
  download
  className="download-btn"
>
  Download CV
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