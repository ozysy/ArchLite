// Contacts.js
import React from 'react';
import Header from './Header';
import Info from './Info';
import Footer from './Footer';
import Mail from './Mail';

const Contacts = () => {
    return (
        <div >
            <Header />
        <div class="main-content">
            <Info />
        </div>
            <Mail />
            <Footer />
        </div>
    );
};

export default Contacts;
