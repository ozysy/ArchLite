import React, { useState } from 'react';
import '../styles/NewsCarousel.css';
import Logo from '../img/logo.png';

const newsItems = [
    {
        date: '17.06.2024',
        category: 'Новости',
        title: 'Инновация в камне',
        description: 'Наша архитектурная мастерская завершила создание первого карбонатного моста в истории архитектуры. Мост, изготовленный из уникального карбонатного материала, представляет собой симбиоз современных технологий и эстетической функциональности, обещая революцию в строительстве инфраструктуры.',
    },
    {
        date: '14.06.2024',
        category: 'Новости',
        title: 'Экологическая революция в дизайне',
        description: 'Наша архитектурная мастерская представила концепцию первого биофилного торгового центра, где зелень и природные элементы воплощены в каждой детали интерьера. Проект обещает изменить подход к созданию устойчивых и экологичных пространств для покупателей и посетителей.'
    },
    {
        date: '10.05.2024',
        category: 'Новости',
        title: 'Премия за инновации',
        description: 'Наша архитектурная мастерская получила международную премию за проект умного дома, интегрирующего новейшие технологии для обеспечения максимального комфорта и энергоэффективности.'
    },
    // Добавьте другие новости по необходимости
];

const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevNews = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1));
    };

    const nextNews = () => {
        setCurrentIndex((prevIndex) => (prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="news-container">
            <div className="news-carousel">
                <h2>Последние новости</h2>
                <div className="news-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {newsItems.map((item, index) => (
                        <div key={index} className="news-item">
                            <div className="news-content">
                                <div className="news-date-category">
                                    <span>{item.date}</span>
                                    <span>{item.category}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="carousel-controls">
                    <button onClick={prevNews}>&lt;</button>
                    <button onClick={nextNews}>&gt;</button>
                </div>
            </div>
            <div className="side-panel">
                <img src={Logo} alt="Logo" className="logo" />
                <blockquote className="quote">"Архитектура — это замеревшая музыка."</blockquote>
            </div>
        </div>
    );
};

export default NewsCarousel;