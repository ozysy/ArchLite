import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import NewsCarousel from './NewsCarousel';

const Main = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <NewsCarousel />
            <Footer />
        </div>
    );
};

export default Main;
