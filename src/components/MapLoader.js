// MapLoader.js
import React, { useEffect } from 'react';

const MapLoader = ({ children }) => {
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
            // Карта загружена
        });
    }, []);

    return <>{children}</>;
};

export default MapLoader;
