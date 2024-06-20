// Info.js
import React from 'react';
import MapLoader from './MapLoader'; // Добавим импорт компонента MapLoader
import Map from './Map';
import '../styles/contacts.css'

const Info = () => {
    return (
        <section id="contacts">
            <h1>Контакты</h1>
            <p>Телефон: 7 901 123 45 67</p>
            <p>Email: info@ArhLite.ru</p>
            <p>Адрес: Им. Сакко и Ванцетти улица, 27, Саратов</p>
            <div className="map-container">
                <MapLoader>
                    <Map />
                </MapLoader>
            </div>
        </section>
    );
};

export default Info;