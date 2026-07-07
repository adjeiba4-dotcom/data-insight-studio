import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-text">
        I'm open to Data Analyst, Business Intelligence, Accounting, and
        Operations Management opportunities. Feel free to reach out.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:adjeiba4@gmail.com">
            adjeiba4@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/emmanuel-adjeibaffour/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/adjeiba4-dotcom"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Location</h3>
          <p>Ghana</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;