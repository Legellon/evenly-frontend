import SearchEventsBar from './SearchEventsBar/SearchEventsBar';
import EventsContainer from './EventsContainer/EventsContainer';

import { useState } from 'react';

import './EventMenu.css'

export default function() {
    const [showControlPanel, setShowControlPanel] = useState(false);
    return (
        <div className="event-menu">

            <SearchEventsBar />
            <EventsContainer />
            
        </div>
    );
}