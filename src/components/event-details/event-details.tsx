import { SelectedEvent } from '../../models/event';
import './event-details.css';

interface EventDetailsProps {
    selectedEvent: SelectedEvent
}

export default function EventDetails ({ selectedEvent }: EventDetailsProps) {
    return (
        <>
            {selectedEvent && (
                <div className="event-details-box shadowed">

                    <div className='event-details-icons-box'>
                        <div
                            className='close-icon-box btn'
                            onClick={() => selectedEvent.close()}
                        >
                            <div className='close-icon-container'>
                                <i className="ri-close-fill" />
                            </div>
                        </div>
                    </div>

                    <div className='event-details-container'>

                        <img className='event-details-image' src={selectedEvent.content.image as string} />

                        <div className='event-details-title'>
                            {selectedEvent.content.title}
                        </div>
                        <div className='event-details-spliter' />

                        <div className='event-details-date'>
                            {selectedEvent.content.date} | {selectedEvent.content.time}
                        </div>
                        <div className='event-details-spliter' />

                        <div className='event-details-description'>
                            <p>{selectedEvent.content.description}</p>
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