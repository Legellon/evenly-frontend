import { useEventsPanel } from '../../../context/events-panel';
import EventCard from './event-card';
import { Event } from '../../../context/events-panel';

interface EventsPlacerProps {
    events: Event[]
}

export default function ({ events }: EventsPlacerProps) {
    const { setSelectedEvent } = useEventsPanel();

    function selectEvent(id: number) {
        const event = events.find(event => event.id === id);
        setSelectedEvent?.(event);
    }

    return (
        <>
            {events.map(event => (
                <EventCard
                    key={event.id}
                    event={event}
                    selectEvent={() => selectEvent(event.id)}
                />
            ))}
        </>
    );
}