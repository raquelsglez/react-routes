import React from 'react';
import {studies, experiences} from '../data/resume';
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <>
            <h1>Currículum</h1>
            <h2>Experiencia educativa</h2>
            <ul>
                {studies.map((study) => (
                    <li key={study.id}>
                         <p><b>{study.title}</b></p>
                         <p>{study.date}</p>
                         <p>{study.institution}</p>
                    </li>
                ))}
            </ul>
            <h2>Experiencia laboral</h2>
            <ul>
                {experiences.map((experiencie) => (
                    <li key={experiencie.id}>
                        <p><b>{experiencie.title}</b></p>
                        <p>{experiencie.date}</p>
                        <p>{experiencie.company}</p>
                    </li>
                ))}
            </ul>
            <Link to="/">Volver a Home</Link>
        </>
    );
};

export default Resume;