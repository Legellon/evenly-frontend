import { useEffect, useRef, useState } from "react";
import EventMenu from "./event-menu";
import Profile from "./profile";
import EventsMap from "./events-map";
import SearchBar from "./search-bar";
import ToggleTheme from "./toggle-theme";
import EventDetails from "./event-details";
import { Event, SelectedEvent } from "../../models/event";
import { ToggleEventsPanelAction } from "../../types/event";
import { useGlobal } from "../../context/global";
import fakeResponse from "../../api/fake-response";
import './content.css';

export default () => {
    const { theme } = useGlobal();

    //State of all available events
    const [events, setEvents] = useState<Array<Event>>([]);
    //State of selected event
    const [selectedEvent, setSelectedEvent] = useState<SelectedEvent>(null);

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

    //Shared data or functional to the context
    const eventContextValue: EventContext = {
        handleClickEventAction,
        closeEventDetails,
        isActiveEvent
    };

    return (
        <div className="content-box">

            <div className={navbarBoxStyles}>
                <ToggleTheme />
                <Profile
                    user={null}
                />
            </div>

            <div className='map-box'>
                {theme && (
                    <EventsMap
                        theme={theme}
                        events={events}
                    />
                )}
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