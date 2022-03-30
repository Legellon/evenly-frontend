import { Event, useEventsPanel } from '../../../context/events-panel';
import './event-details.css';

interface EventDetailsProps {
    event: Event | undefined
}

export default function ({ event }: EventDetailsProps) {
    const { setSelectedEvent } = useEventsPanel();

    function closeEventDetails(): void {
        setSelectedEvent?.(undefined);
    }

    return (
        <>
            {event && (
                <div className="event-details-box shadowed">

                    <div className='event-details-icons-box'>
                        <div 
                            className='close-icon-box btn'
                            onClick={ closeEventDetails }
                        >
                            <div className='close-icon-container'>
                                <i className="ri-close-fill" />
                            </div>
                        </div>
                    </div>

                    <div className='event-details-container'>

                        <img className='event-details-image' src={event.content.image as string} />

                        <div className='event-details-title'>
                            {event.content.title}
                        </div>
                        <div className='event-details-spliter' />

                        <div className='event-details-date'>
                            {event.content.date} | {event.content.time}
                        </div>
                        <div className='event-details-spliter' />

                        <div className='event-details-description'>
                            {event.content.description}
                        </div>
                        <div className='event-details-spliter' />

                        <div className='event-details-social'>
                            Social network links:
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}