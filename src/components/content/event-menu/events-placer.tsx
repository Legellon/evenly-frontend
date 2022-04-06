import { useEvent, Event } from '../../../context/event';
import EventCard from './event-card';

interface EventsPlacerProps {
    events: Event[]
    selectedEventId: number | undefined
}

export default ({ events, selectedEventId }: EventsPlacerProps) => {
    const { handleClickEventAction } = useEvent();
    return (
        <>
            {events.map(event => (
                <EventCard
                    key={event.id}
                    event={event}
                    onClickAction={() => handleClickEventAction(event.id, selectedEventId)}
                />)
            )}
        </>
    );
}