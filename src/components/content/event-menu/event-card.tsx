import { MouseEventHandler } from 'react';
import { Event } from '../../../models/event';
import './event-card.css';

interface EventCardProps {
    event: Event
    onClick: MouseEventHandler<HTMLDivElement>
    active?: boolean
}

export default ({ event, onClick, active = false }: EventCardProps) => {
    const eventContent = event.content;

    const eventCardStyles = [
        'event-card',
        active ? 'active' : ''
    ].join(' ');

    return (
        <div className={eventCardStyles} onClick={onClick}>

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