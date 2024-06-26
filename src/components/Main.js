import React from 'react';
import Header from './Header';
import MainContentAbout from './MainContentAbout';
import Footer from './Footer';
import NewsCarousel from './NewsCarousel';

const Main = () => {
    return (
        <div>
            <Header />
            <MainContentAbout />
            <NewsCarousel />
            <Footer />
        </div>
    );
};

export default Main;
