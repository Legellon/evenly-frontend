import { FC, useEffect, useState } from "react";
import EventMenu from "./event-menu";
import Profile from "./profile";
import EventsMap from "./events-map";
import SearchBar from "./search-bar";
import ToggleTheme from "./toggle-theme";
import EventDetails from "./event-details";
import EventProvider, { ClickEventAction, CloseEventAction, Event, EventContext, OpenEventAction, OpenEventActionById } from "../../context/event";
import { useGlobal } from "../../context/global";
import fakeResponse from "../../api/fake-response";
import './content.css';

export type ToggleEventAction = () => void;

export default () => {
    const { theme } = useGlobal();

    //State of all available events
    const [events, setEvents] = useState<Event[]>([]);
    //State of active event
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    //State of left panel
    const [collapsedEventsPanel, setCollapsedEventsPanel] = useState<boolean>(false);

    //Tipa Fetch Api Hook
    useEffect(() => {
        const loadedEvents = fakeResponse.events;
        setEvents(loadedEvents);
    }, []);

    //Open/Close left events panel
    const toggleEventsPanel: ToggleEventAction = () => {
        setCollapsedEventsPanel(!collapsedEventsPanel);
    }

    //Close right event panel
    const closeEventDetails: CloseEventAction = () => {
        setSelectedEvent(null);
    }

    //Open right event panel
    const openEventDetails: OpenEventAction = (event: Event) => {
        setSelectedEvent(event);
    }

    //Find and open event by id
    const openEventDetailsById: OpenEventActionById = (id) => {
        const event = events.find(event => event.id === id);
        if (event) openEventDetails(event);
        else throw new Error('Unable to find an event by id.');
    }

    //Handle actions after click on event
    //Open if closed and close if opened
    const handleClickEventAction: ClickEventAction = (eventId, selectedEventId) => {
        if (selectedEventId || selectedEventId === 0) {
            if (selectedEventId === eventId) return closeEventDetails();
        }
        return openEventDetailsById(eventId);
    };

    //Generate styles for a navbar of upper UI buttons
    const navbarBoxStyles = [
        'navbar-box', //Default style
        selectedEvent ? 'displaced-right' : '' //Move the box if the right panel is displayed
    ].join(' ');

    //Shared data or functional to the context
    const eventContextValue: EventContext = {
        handleClickEventAction,
        closeEventDetails
    };

    return (
        <div className="content-box">

            <div className={navbarBoxStyles}>
                <ToggleTheme />
                <Profile
                    user={null}
                />
            </div>

            <EventProvider value={eventContextValue}>
                <div className='map-box'>
                    {theme && (
                        <EventsMap
                            theme={theme}
                            events={events}
                            selectedEventId={selectedEvent?.id}
                        />
                    )}
                </div>

                <SearchBar
                    placeholder="Enter event title..."
                />

                <EventMenu
                    events={events}
                    collapsed={collapsedEventsPanel}
                    selectedEventId={selectedEvent?.id}
                    togglePanelAction={toggleEventsPanel}
                />

                <EventDetails
                    selectedEvent={selectedEvent}
                />
            </EventProvider>
        </div>
    );
}