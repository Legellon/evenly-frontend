import { useState, useEffect, useContext } from 'react';
import EventsPlacer from './events-placer';
import ToggleMenuBtn from './toggle-menu-btn';
import { Event } from '../../../context/events-panel';
import './event-menu.css'

interface EventMenuProps {
    events: Event[],
    collapsed: boolean,
    togglePanel: () => void
}

export default function ({ events, collapsed, togglePanel }: EventMenuProps) {
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
                    />
                </div>
                
            </div>

            <div 
                className='btn toggle-panel-box'
                onClick={togglePanel}
            >
                <ToggleMenuBtn 
                    collapsed={collapsed} 
                />
            </div>
        </div>
    );
}