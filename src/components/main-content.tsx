import { useEffect, useRef, useState } from "react";
import EventMenu from "./event-menu";
import Profile from "./profile";
import EventsMap from "./events-map";
import SearchBar from "./search-bar";
import ToggleTheme from "./toggle-theme";
import EventDetails from "./event-details";
import { Event, SelectedEvent } from "../models/event";
import { ToggleEventsPanelAction } from "../types/event";
import { useGlobal } from "../context/global";
import fakeResponse from "../api/fake-response";
import './main-content.css';

export default function MainContent () {
    const { theme } = useGlobal();

    //State of all available events
    const [events, setEvents] = useState<Array<Event>>([]);
    //State of selected event
    const [selectedEvent, setSelectedEvent] = useState<SelectedEvent>(null);
    const selectedEventRef = useRef(selectedEvent);

    //State of left panel
    const [collapsedEventsPanel, setCollapsedEventsPanel] = useState<boolean>(false);

    //Close right event panel
    const closeEvent = (event: Event) => {
        event.isSelected = false;
        setSelectedEvent(null);
    }

    //Open right event panel
    const openEvent = (event: Event) => {
        selectedEventRef?.current?.close();
        event.isSelected = true;
        setSelectedEvent(event);
    }

    //Open/Close left events panel
    const toggleEventsPanel: ToggleEventsPanelAction = () => {
        setCollapsedEventsPanel(!collapsedEventsPanel);
    }

    //Generate styles for a navbar of upper UI buttons
    const navbarBoxStyles = [
        'navbar-box', //Default style
        selectedEvent ? 'displaced-right' : '' //Move the box if the right panel is displayed
    ].join(' ');

    //Tipa Fetch Api Hook
    useEffect(() => {
        const loadedEvents = fakeResponse.events;

        const events = loadedEvents.map(loadedEvent => {
            const { id, content, coordinates } = loadedEvent;
            const event = new Event({ id, content, coordinates });

            event.assignCloseCallback(() => closeEvent(event));
            event.assignOpenCallback(() => openEvent(event));

            return event;
        });

        setEvents(events);
    }, []);

    useEffect(() => {
        selectedEventRef.current = selectedEvent;
    }, [selectedEvent]);

    return (
        <div className="content-box">
            <div className={navbarBoxStyles}>
                <ToggleTheme />
                <Profile
                    user={null}
                />
            </div>

            <div className='map-box'>
                <EventsMap
                    theme={ theme }
                    events={ events }
                />
            </div>

            <SearchBar
                placeholder="Enter event title..."
            />

            <EventMenu
                events={events}
                isCollapsed={collapsedEventsPanel}
                togglePanelAction={toggleEventsPanel}
            />

            <EventDetails
                selectedEvent={selectedEvent}
            />
        </div>
    );
}