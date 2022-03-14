import { useState } from 'react';
import './Profile.css'

const image = require('../../../assets/images/avatar.png');

export default function() {
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

    const toggleProfileMenu = () => {
        setOpenProfileMenu(!openProfileMenu);
    };

    return (
        <div className="profile-container">
            <div 
                className={
                    `profile ${ openProfileMenu ? 'opened' : '' }`
                }
                onClick={toggleProfileMenu}
            >
                <img 
                    className='profile-image' 
                    src={image} 
                />
            </div>
        </div>
    );
}