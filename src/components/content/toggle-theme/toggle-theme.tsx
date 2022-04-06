import { useGlobal } from "../../../context/global";
import './toggle-theme.css'

export default () => {
    const { theme, toggleTheme } = useGlobal();
    return (
        <div className='theme-icon-box btn'>
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