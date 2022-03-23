import { useContext } from "react";
import { AppContext } from "../../../App";

import './toggle-theme.css';

export default function () {
    const { theme, toggleTheme} = useContext(AppContext);
    return (
        <div className='theme-icon-box'>
            <div
                className={`theme-container ${theme}`}
                onClick={toggleTheme}
            >
                <i className="ri-sun-fill sun-icon" />
                <i className="ri-moon-fill moon-icon" />
            </div>
        </div>
    );
}