import EventCard from './event-card.js';

export default function ({ events }) {
    return (
        <>
            {
                events.map(event => (
                    <EventCard
                        key={event.id}
                        image={event.image}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                    />
                ))
            }
        </>
    );
}