import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useGlobal, ColorThemes } from "../../../context/global";
import { Event } from "../../../context/events-panel";
import { Feature, FeatureCollection } from "geojson";
import './events-map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHV6aWJveSIsImEiOiJjbDBqYjFtZnIwYXVhM2VwNmUxYTQ1aGRuIn0.Xg9JAhEe0H5ci0aKPfB9sQ';

interface MapProps {
    events: Event[]
}

function serializeEventsToFeatures(events: Event[]) {
    const features: Feature[] = events.map(event => ({
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [
                event.coordinates.lng, event.coordinates.lat
            ]
        },
        properties: { ...event.content, id: event.id }
    }));
    return features;
}

export default function ({ events }: MapProps) {
    const { theme } = useGlobal();

    const geoEvents: FeatureCollection = {
        type: "FeatureCollection",
        features: serializeEventsToFeatures(events)
    }

    const [lng, setLng] = useState(24.753574);
    const [lat, setLat] = useState(59.436962);

    const [map, setMap] = useState<mapboxgl.Map>();
    const mapNode = useRef(document.createElement("div"));

    useEffect(() => {
        if (!events) return;

        const node = mapNode.current;
        const style = theme === ColorThemes.DARK ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10';

        const mapboxMap = new mapboxgl.Map({
            container: node,
            style: style,
            center: [lng, lat],
            zoom: 12
        });

        setMap(mapboxMap);

        return () => {
            mapboxMap.remove();
        };
    }, [theme]);
    
    geoEvents.features.map(feature => {
        // new mapboxgl.Marker().setLngLat()
    });

    return <div ref={mapNode} className='map-container' />;
}