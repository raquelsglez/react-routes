import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return(
        <>
            <h1>Bienvenid@ a mi portfolio</h1>
            <p>Portfolio de Raquel Sánchez, Full Stack Developer</p>
            <ul>
                <li><Link to="/projects">Proyectos</Link></li>
                <li><Link to="/resume">Currículum</Link></li>
            </ul>
        </>
    );
};

export default Home;
