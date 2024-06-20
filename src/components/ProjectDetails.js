// ProjectDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css'; // Импортируем CSS
import image6 from '../img/villa.png';
import image7 from '../img/office1.png';
import image8 from '../img/office2.png';
import image9 from '../img/mall.png';
import image10 from '../img/interior1.png';
import image11 from '../img/interior2.png';
import Header from './Header';
import Footer from './Footer';

const projectsData = [
    { id: 1, type: 'architecture', src: image6, alt: 'Вилла вест-нортон', title: 'Вилла вест-нортон', description: 'Описание проекта Вилла вест-нортон.', details: 'Эта современная вилла, окруженная густыми деревьями, олицетворяет гармоничное слияние архитектуры с природой. Использование больших стеклянных фасадов позволяет естественному свету проникать внутрь, создавая ощущение простора и соединения с окружающим ландшафтом. Простые линии и минималистичный дизайн подчеркивают элегантность и утонченность постройки.' },
    { id: 2, type: 'commercial', src: image7, alt: 'Офисс Джей-Джей Филмс', title: 'Офисс Джей-Джей Филмс', description: 'Описание проекта Офисс Джей-Джей Филмс.', details: 'Дополнительные детали о проекте Офисс Джей-Джей Филмс, включая корпоративные особенности и уникальные решения.' },
    { id: 3, type: 'commercial', src: image9, alt: 'ТРК Сальфеджио', title: 'ТРК Сальфеджио', description: 'Описание проекта ТРК Сальфеджио.', details: 'Дополнительные детали о проекте ТРК Сальфеджио, включая коммерческие особенности и инновационные решения.' },
    { id: 4, type: 'architecture', src: image8, alt: 'Офисс Монео', title: 'Офисс Монео', description: 'Описание проекта Офисс Монео.', details: 'Дополнительные детали о проекте Офисс Монео, включая архитектурные особенности и используемые материалы.' },
    { id: 5, type: 'private', src: image10, alt: 'Интерьер Осмос', title: 'Интерьер Осмос', description: 'Описание проекта Интерьер Осмос.', details: 'Дополнительные детали о проекте Интерьер Осмос, включая дизайн и уникальные решения.' },
    { id: 6, type: 'private', src: image11, alt: 'Интерьер Галий', title: 'Интерьер Галий', description: 'Описание проекта Интерьер Галий.', details: 'Дополнительные детали о проекте Интерьер Галий, включая дизайн и уникальные решения.' },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    if (!project) {
        return <div>Проект не найден</div>;
    }

    return (
        <div>
        <Header />
        <div className="project-details">
            <h1>{project.title}</h1>
            <img src={project.src} alt={project.alt} />
            <p>{project.description}</p>
            <p>{project.details}</p>
        </div>
        <Footer />
        </div>
    );
};

export default ProjectDetails;
