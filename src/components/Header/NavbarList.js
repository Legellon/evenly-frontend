import { useContext } from "react";
import { AppContext } from "../../App";
import { HeaderContext } from "./Header";
import { ColorThemes } from "../../App";

export default function() {
    const { showMenu, toggleMenu } = useContext(HeaderContext);
    const { 
        toggleTheme, openSearch,
        theme 
    } = useContext(AppContext);
    return (
        <div className='list'>
            <button 
                className={
                    `btn place-items-center ${ theme === ColorThemes.LIGHT ? 'light-theme' : '' }`
                }
                onClick={() => toggleTheme()}
            >
                <i className='ri-sun-line sun-icon' />
                <i className='ri-moon-line moon-icon' />
            </button>

            <button 
                className='btn place-items-center'
                onClick={() => openSearch()}
            >
                <i className='ri-search-line' />
            </button>

            <button 
                className={
                    `btn place-items-center screen-lg-hidden menu-toggle-icon ${ showMenu ? 'activated' : '' }`
                }
                onClick={() => toggleMenu()}
            >
                <i className='ri-menu-3-line open-menu-icon' />
                <i className='ri-close-line close-menu-icon' />
            </button>

            <a href="#" className='list-link screen-sm-hidden'>Sign In</a>
            <a href="#" className='list-link screen-sm-hidden btn sign-up-btn fancy-border'>
                <span>Sign Up</span>
            </a>
        </div>
    );
}