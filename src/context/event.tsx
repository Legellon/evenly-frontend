import { createContext, useContext } from "react";

export type EventID = number;

export type Coordinates = {lng: number, lat: number};

export type OpenEventActionById = (eventId: EventID) => void;
export type CloseEventAction = () => void;
export type OpenEventAction = (event: Event) => void;
export type ClickEventAction = (eventId: EventID, selectedEventId?: EventID) => void;
export type ActiveEventStyleDefiner = (event: EventID) => 'active' | '';

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

export interface EventContext {
    openEventDetails?: OpenEventAction,
    openEventDetailsById?: OpenEventActionById,
    closeEventDetails?: CloseEventAction,
    handleClickEventAction: ClickEventAction,
    isActiveEvent: ActiveEventStyleDefiner,
}

const EventContext = createContext<EventContext>({
    handleClickEventAction: () => { throw new Error("handleClickEventAction doesn't exist.") },
    isActiveEvent: () => '',
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