import EventCard from './event-card';
import ToggleMenuBtn from './toggle-menu-btn';
import { Event } from '../../../models/event';
import './event-menu.css'

interface EventMenuProps {
    events: Event[]
    isCollapsed: boolean
    togglePanelAction: () => void
}

export default ({ events, isCollapsed, togglePanelAction }: EventMenuProps) => {
    return (
        <div
            className={
                `events-panel-box shadowed${isCollapsed ? ' collapsed' : ''}`
            }
        >
            <div className='events-panel-container'>

                <div className='events-search-spacer' />

                <div className='events-container'>
                    {events.map(event => (
                        <EventCard
                            key={event.id}
                            event={event}
                            onClick={() => event.clickAction()}
                            active={event.isSelected}
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