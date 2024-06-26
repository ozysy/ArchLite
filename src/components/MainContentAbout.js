import React from 'react';
import '../styles/main.css';
import image from '../img/main.png';

const MainContent = () => {
    return (
        <main className="main-content-about">
            <img src={image} alt="Building Image" className="main-image" />
            <p className="main-text">
            Архитектура — это застывшая музыка, симфония, которая воплощает в себе гармонию и диссонанс человеческой мысли и природы. Каждое здание, каждая структура — это физическое выражение времени, культуры и духа, нечто большее, чем просто стены и крыши. Взаимодействие света и тени, пространства и формы, материальности и пустоты — это диалог между создателем и миром, который он стремится преобразить и понять. Архитектура — это не просто искусство возводить здания, это искусство создавать пространство для жизни, искусства и мысли.
            </p>
        </main>
    );
};

export default MainContent;
