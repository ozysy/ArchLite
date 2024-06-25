// Map.js
import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const loadScript = (url, callback) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';

            if (script.readyState) {
                script.onreadystatechange = function() {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function() {
                    callback();
                };
            }

            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        };

        loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=e367c6e8-3da6-407e-9b16-2387dc14e672', () => {
            window.ymaps.ready(() => {
                const is4K = window.innerWidth >= 3840;
                const zoomLevel = is4K ? 18 : 16; // Устанавливаем больший масштаб для 4K экранов

                const map = new window.ymaps.Map("map", {
                    center: [51.529371, 46.027717], // Координаты центра карты
                    // zoom: 16 // Масштаб карты
                    zoom: zoomLevel // Масштаб карты
                });

                const placemark = new window.ymaps.Placemark([51.529371, 46.027717], {
                    hintContent: "Им. Сакко и Ванцетти улица, 27, Саратов",
                    balloonContent: "Им. Сакко и Ванцетти улица, 27, Саратов"
                });

                map.geoObjects.add(placemark);
            });
        });
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
    );
};

export default Map;
