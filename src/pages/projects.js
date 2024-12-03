import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
    const proyectos = [
        {
            nombre: 'Sitio web',
            descripcion: 'Portafolio personal',
            link: "https://alexander-503.github.io/"
        },
        {
            nombre: 'Aplicación de universidades',
            descripcion: 'La información actualizada de todas las universidades del país',
            link: "https://alexander-503.github.io/"
        },
        {
            nombre: 'Start Up - Altempo',
            descripcion: 'Aplicación beta de Start-Up - Altempo',
            link: "https://alexander-503.github.io/"
        }
    ];

return (
    <section className="projects"> 
    <h2>Mis Proyectos</h2>
    <div className="projects-grid"> 
    {proyectos.map((proyecto, index) => (
        <div key={index} className="project-card">
            <h3>{proyecto.nombre}</h3> 
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer"> 
            <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
        </div>
    ))}
</div>
</section>

    );
}

export default Projects;
