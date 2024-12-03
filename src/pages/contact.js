import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
    <section className="contact">
    <br></br>
    <br></br>
    <h2>Contáctame</h2>
    <p>Puedes contactarme a través de mi correo electrónico:</p>
    <h2>eduardo.vasquezm15@gmail.com</h2>
    <p>Sígueme en mis redes sociales:</p>
    <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100048584479318" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="www.linkedin.com/in/alexander-dev10" target="_blank" rel="noopener noreferrer"> {" "}
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://alexander-503.github.io/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
    </div>
    </section>
    );
}

export default Contact;
