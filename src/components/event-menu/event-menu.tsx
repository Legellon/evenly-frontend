import EventCard from './event-card';
import ToggleMenuBtn from './toggle-menu-btn';
import {Event} from '../../models/event';
import './event-menu.css'

interface EventMenuProps {
    events: Event[]
    isCollapsed: boolean
    togglePanelAction: () => void
    query: string
}

export default function EventMenu ({ events, query, isCollapsed, togglePanelAction }: EventMenuProps) {

    //Select events that only match to query
    const matchedEvents = events.filter(event =>
        //Which fields to check in event
        event.content.title.toLowerCase().includes(query.toLowerCase()) //Title
    );

    return (
        <div
            className={
                `events-panel-box shadowed${isCollapsed ? ' collapsed' : ''}`
            }
        >
            <div className='events-panel-container'>

                <div className='events-search-spacer'/>

                <div className='events-container'>
                    {matchedEvents.map(event => (
                        <EventCard
                            key={event.id}
                            event={event}
                            onClick={() => event.clickAction()}
                            isSelected={event.isSelected}
                        />)
                    )}
                </div>

            </div>

            <div
                className='btn toggle-panel-box'
                onClick={togglePanelAction}
            >
                <ToggleMenuBtn
                    isCollapsed={isCollapsed}
                />
            </div>
        </div>
    );
}