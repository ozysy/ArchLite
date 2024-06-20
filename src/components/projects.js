// Projects.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/projects.css';
import image6 from '../img/villa.png';
import image7 from '../img/office1.png';
import image8 from '../img/office2.png';
import image9 from '../img/mall.png';
import image10 from '../img/interior1.png';
import image11 from '../img/interior2.png';

const Projects = ({ filter }) => {
    const projects = [
        { id: 1, type: 'architecture', src: image6, alt: 'Вилла вест-нортон', title: 'Вилла вест-нортон' },
        { id: 2, type: 'commercial', src: image7, alt: 'Офисс Джей-Джей Филмс', title: 'Офисс Джей-Джей Филмс' },
        { id: 3, type: 'commercial', src: image9, alt: 'ТРК Сальфеджио', title: 'ТРК Сальфеджио' },
        { id: 4, type: 'architecture', src: image8, alt: 'Офисс Монео', title: 'Офисс Монео' },
        { id: 5, type: 'private', src: image10, alt: 'Интерьер Осмос', title: 'Интерьер Осмос' },
        { id: 6, type: 'private', src: image11, alt: 'Интерьер Галий', title: 'Интерьер Галий' },
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

    return (
        <div className="projects">
            {filteredProjects.map((project, index) => (
                <div className={`project ${project.type}`} key={index}>
                    <Link to={`/projects/${project.id}`}>
                        <img src={project.src} alt={project.alt} />
                        <p className="font-weight-bold">{project.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Projects;
