import { createContext, useContext } from "react";

export interface EventContext {}

const EventContext = createContext<EventContext>({});

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