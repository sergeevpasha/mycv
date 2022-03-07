import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function SimpleMap() {
    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic2VyZ2VldnBhc2hhIiwiYSI6ImNsMGZjNDkxaDBybXczY3F0eDR2dzhwNWIifQ.EI_P0uk45tDEWWsUugXW-w';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [100.548867, 13.74783],
            zoom: 13,
        });

        const popup = new mapboxgl.Popup({ offset: 40 }).setText('1 Wireless Rd, Lumphini, Pathum Wan, Bangkok 10330');

        const el = document.createElement('div');
        el.id = 'marker';

        new mapboxgl.Marker(el).setLngLat([100.548867, 13.74783]).setPopup(popup).addTo(map);

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    });

    return <div className="map" id="map" />;
}

export default SimpleMap;
