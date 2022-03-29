import { Event } from '../../../context/events-panel';
import './event-details.css';

interface EventDetailsProps {
    event: Event | undefined
}

export default function ({ event }: EventDetailsProps) {
    return (
        <>
            {event && (
                <div className="event-details shadowed">
                    <img className='event-details-image' src={event.content.image as string} />
                </div>
            )}
        </>
    );
}