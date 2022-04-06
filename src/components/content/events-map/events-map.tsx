import { Map, Marker } from "react-map-gl";
import { useMemo } from "react";
import { ColorThemes } from "../../../context/global";
import { Event, EventData, useEvent } from "../../../context/event";
import './events-map.css';

const mapboxAccessToken = 'pk.eyJ1IjoicHV6aWJveSIsImEiOiJjbDBqYjFtZnIwYXVhM2VwNmUxYTQ1aGRuIn0.Xg9JAhEe0H5ci0aKPfB9sQ';

interface EventFeatureData extends EventData {
    id: number
};

type MapProps = {
    theme: ColorThemes
    events: Event[]
    selectedEventId: number | undefined
};

function serializeEventsToFeatureCollection(events: Event[]): GeoJSON.FeatureCollection<GeoJSON.Point, EventFeatureData> {
    return {
        type: 'FeatureCollection',
        features: events.map(event => ({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [
                    event.coordinates.lng, event.coordinates.lat
                ]
            },
            properties: { ...event.content, id: event.id }
        }))
    };
}

export default ({ theme, events, selectedEventId }: MapProps) => {
    const { handleClickEventAction } = useEvent();

    const eventFeatures = useMemo(() => serializeEventsToFeatureCollection(events), [events]);
    const mapboxStyle = theme === ColorThemes.DARK ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10';
    
    return (
        <Map
            mapboxAccessToken={mapboxAccessToken}
            initialViewState={{
                latitude: 59.436962,
                longitude: 24.753574,
                zoom: 12
            }}
            mapStyle={mapboxStyle}
        >
            {eventFeatures.features.map(feature => (
                <Marker
                    key={feature.properties.id}
                    longitude={feature.geometry.coordinates[0]}
                    latitude={feature.geometry.coordinates[1]}
                    style={{
                        width: '20px', height: '20px',
                        cursor: 'pointer'
                    }}
                    onClick={() => handleClickEventAction(feature.properties.id, selectedEventId)}
                >
                    <div className="marker-body">

                    </div>
                </Marker>
            ))}
        </Map>
    );
}