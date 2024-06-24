import React from 'react';
import projects from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
    return(
        <>
            <h1>Proyectos</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name}/>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank">Ver</a>
                    </li>
                ))}
            </ul>
            <Link to="/">Volver a Home</Link>
        </>
    );
};

export default Projects;
