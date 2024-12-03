import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function Home() {
    return (
    <section className="home">
        <div>
            <h1>Soy Alexander Vásquez</h1>
            <p>
            Soy un <strong>Full Stack Developer</strong> especializado en el desarrollo web</p>
        <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100048584479318" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/alexander-dev10" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
        </a>
        <a href="https://alexander-503.github.io/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
        </a>
        </div>
    </div>
    </section>
    );
}

export default Home;
