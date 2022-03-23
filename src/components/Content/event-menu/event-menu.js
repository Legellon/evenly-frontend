import { useState, useEffect } from 'react';
import EventsDisplayer from './events-displayer.js';

import './event-menu.css'

export default function ({ events }) {
    const [collapseEventsPanel, setCollapseEventsPanel] = useState(false);

    const toggleEventsPanel = () => {
        setCollapseEventsPanel(!collapseEventsPanel);
    };

    const openEventsPanel = () => {
        setCollapseEventsPanel(false);
    };

    return (
        <div
            className={
                `events-panel-box${collapseEventsPanel ? ' collapsed' : ''}`
            }
        >
            <div className='events-panel-container'>

                <div className='events-search-spacer' />

                <div className='events-container'>
                    <EventsDisplayer
                        events={events}
                    />
                </div>

            </div>

            <div
                className='btn toggle-events-panel'
                onClick={toggleEventsPanel}
            >
                {collapseEventsPanel ?
                (
                    <>
                        <i className='ri-arrow-right-s-fill right-icon' />
                        <i className='ri-arrow-up-s-fill up-icon' />
                    </>
                ) :
                (
                    <>
                        <i className='ri-arrow-left-s-fill left-icon' />
                        <i className='ri-arrow-down-s-fill down-icon' />
                    </>
                )}
            </div>
        </div>
    );
}