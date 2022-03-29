import { Event } from '../../../context/events-panel';

import './event-card.css';

interface EventCardProps {
    event: Event,
    selectEvent: () => void
}

export default function({ event, selectEvent }: EventCardProps) {
    const eventContent = event.content;
    return (
        <div className="event-card" onClick={selectEvent}>

            <img src={eventContent.image as string} className="event-card-image" />
            {/* <span className="article-category">Technology</span> */}

            <div className="event-card-data-container">

                <div className="event-card-data">
                    <span>{eventContent.date}</span>
                </div>

                <h3 className="title event-card-title">{eventContent.title}</h3>

            </div>

        </div>
    );
}