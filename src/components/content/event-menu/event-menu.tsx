import EventsPlacer from './events-placer';
import ToggleMenuBtn from './toggle-menu-btn';
import { Event } from '../../../context/event';
import './event-menu.css'

interface EventMenuProps {
    events: Event[]
    collapsed: boolean
    selectedEventId: number | undefined
    togglePanelAction: () => void
}

export default ({ events, collapsed, togglePanelAction, selectedEventId }: EventMenuProps) => {
    return (
        <div
            className={
                `events-panel-box shadowed${collapsed ? ' collapsed' : ''}`
            }
        >
            <div className='events-panel-container'>

                <div className='events-search-spacer' />

                <div className='events-container'>
                    <EventsPlacer
                        events={events}
                        selectedEventId={selectedEventId}
                    />
                </div>
                
            </div>

            <div 
                className='btn toggle-panel-box'
                onClick={togglePanelAction}
            >
                <ToggleMenuBtn 
                    collapsed={collapsed} 
                />
            </div>
        </div>
    );
}