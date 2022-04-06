import { createContext, useContext } from "react";

export type EventID = number;

export type Coordinates = {lng: number, lat: number};

export type OpenEventActionById = (eventId: EventID) => void;
export type CloseEventAction = () => void;
export type OpenEventAction = (event: Event) => void;
export type ClickEventAction = (eventId: EventID, selectedEventId?: EventID) => void;

export interface EventData {
    creator_id: EventID,

    description: string,
    title: string,

    date: string,
    time: string,

    image: typeof import(".jpeg") | string,
}

export interface Event {
    id: EventID
    coordinates: Coordinates
    content: EventData
}

export type EventContext = {
    openEventDetails?: OpenEventAction,
    openEventDetailsById?: OpenEventActionById,
    closeEventDetails?: CloseEventAction,
    handleClickEventAction: ClickEventAction
}

const EventContext = createContext<EventContext>({
    handleClickEventAction: () => {},
});

export function useEvent(): EventContext {
    return useContext(EventContext);
}

export default function EventProvider({ value, children }: any) {
    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    );
}