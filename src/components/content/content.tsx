import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import EventMenu from "./event-menu";
import Profile from "./profilet";
import Map from "./map";
import SearchBar from "./search-bar";
import ToggleTheme from "./toggle-theme";
import EventDetails from "./event-details";
import EventsPanelProvider, { Event } from "../../context/events-panel";
import fakeResponse from "../../api/fake-response";
import './content.css';

export default function () {
    const [events, setEvents] = useState<Event[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);

    const [collapsedEventsPanel, setCollapsedEventsPanel] = useState<boolean>(false);

    useEffect(() => {
        const loadedEvents = fakeResponse.events;
        setEvents(loadedEvents);
    }, []);

    //Open/Close events panel
    function toggleEventsPanel() {
        setCollapsedEventsPanel(!collapsedEventsPanel);
    }

    const EventsPanelContext = {
        setSelectedEvent
    };

    const mapBoxStyles = [
        'map-box',
        collapsedEventsPanel ? '' : 'opened-panel',
        selectedEvent ? 'opened-details' : ''
    ].join(' ');

    return (
        <>

            <div className="navbar-box">
                <ToggleTheme />
                <Profile
                    user={null}
                />
            </div>

            <div className={mapBoxStyles}>
                <Map 
                    events={events}
                />
            </div>

            <EventsPanelProvider value={EventsPanelContext}>
                <SearchBar
                    placeholder="Enter event title..."
                />

                <EventMenu
                    events={events}
                    collapsed={collapsedEventsPanel}
                    togglePanel={toggleEventsPanel}
                />
            </EventsPanelProvider>

            <EventDetails
                event={selectedEvent}
            />

        </>
    );
}