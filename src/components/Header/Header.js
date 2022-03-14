import { createContext, useEffect, useState } from 'react';
import Logo from './Logo';
import List from './NavbarList';

import './Header.css';

export const HeaderContext = createContext(null);

export default function () {
    const [showMenu, setShowMenu] = useState(false);
    const [displayShadow, setDisplayShadow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY == 0) {
            setDisplayShadow(false);
        } else {
            setDisplayShadow(true);
        }
    };

    const contextValue = {
        showMenu,

        toggleMenu: () => {
            setShowMenu(!showMenu);
        }
    };

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderContext.Provider value={contextValue}>
            <header
                className={
                    `header ${displayShadow ? 'activated' : ''}`
                }
            >
                <nav className='navbar container'>
                    <Logo />
                    <List />
                    {/* <Menu /> */}
                </nav>
            </header>
        </HeaderContext.Provider>
    );
};