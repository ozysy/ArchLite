import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import 'boxicons/css/boxicons.min.css';
import Logo from '../img/logo.png';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleNavLinkClick = () => {
        setIsActive(false);
    };

    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('mouseover', () => moveUnderline(link));
        });

        const moveUnderline = (link) => {
            const underline = document.querySelector('.nav-underline');
            const linkRect = link.getBoundingClientRect();
            const navbarRect = document.querySelector('.navbar').getBoundingClientRect();
            underline.style.width = linkRect.width + 'px';
            underline.style.left = (linkRect.left - navbarRect.left) + 'px';
        };

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('mouseover', () => moveUnderline(link));
            });
        };
    }, []);

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span className="brand-name">Архитектурная мастерская</span>
            </div>
            <nav className={`navbar ${isActive ? 'active' : ''}`}>
                <Link to="/" className="nav-link" onClick={handleNavLinkClick}>О нас</Link>
                <Link to="/Product" className="nav-link" onClick={handleNavLinkClick}>Проекты</Link>
                <Link to="/Contacts" className="nav-link" onClick={handleNavLinkClick}>Контакты</Link>
                <div className="nav-underline"></div>
            </nav>
            <div className="user-menu">
                <Link to="/UserName" className="user-icon">
                    <i className='bx bx-user'></i>
                </Link>
                <button className="menu-toggle" onClick={handleToggle}>
                    <i className='bx bx-menu'></i>
                </button>
            </div>
            {/* <div class='block'><p>Рандомный текст</p></div>   */}
        </header>
    );
};

export default Header;
