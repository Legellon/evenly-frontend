import { useEffect, useState } from "react";
import axios from "axios";
import EventMenu from "./event-menu";
import Profile from "./profile";
import EventsMap from "./events-map";
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

    const navbarBoxStyles = [
        'navbar-box',
        selectedEvent ? 'displaced-right' : ''
    ].join(' ');

    return (
        <div className="content-box">

            <div className={navbarBoxStyles}>
                <ToggleTheme />
                <Profile
                    user={null}
                />
            </div>

            <div className={mapBoxStyles}>
                <EventsMap 
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

                <EventDetails
                    event={selectedEvent}
                />
            </EventsPanelProvider>
        </div>
    );
}