import { MouseEventHandler } from 'react';
import { Event } from '../../../context/event';
import './event-card.css';

interface EventCardProps {
    event: Event,
    onClickAction: MouseEventHandler<HTMLDivElement>
}

export default ({ event, onClickAction }: EventCardProps) => {
    const eventContent = event.content;
    return (
        <div className="event-card" onClick={onClickAction}>

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