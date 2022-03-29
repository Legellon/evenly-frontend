import { createContext, useContext } from "react";

export interface EventData {
    creator_id: number,
    description: string,
    title: string,
    date: string,
    time: string,
    image: typeof import(".jpeg") | string,
}

export type Event = {
    id: number,
    coordinates: {
        lng: number, lat: number
    },
    content: EventData
}

export type EventsPanelContext = {
    setSelectedEvent?: (event: Event | undefined) => void,
}

const EventsPanelContext = createContext<EventsPanelContext>({});

export function useEventsPanel() {
    return useContext(EventsPanelContext);
}

export default function EventsPanelProvider({ value, children }: any) {
    return (
        <EventsPanelContext.Provider value={value}>
            {children}
        </EventsPanelContext.Provider>
    );
}