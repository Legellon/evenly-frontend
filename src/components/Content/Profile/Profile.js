import { useContext, useState } from 'react';
import './profile.css'

export default function ({ user, auth }) {
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

    const profileContainerClasses = [
        openProfileMenu ? 'opened' : '', 
        auth ? '' : 'login',
    ].join(' ');

    const toggleProfile = () => {
        if (auth) {
            setOpenProfileMenu(!openProfileMenu);
        }
    };

    return (
        <>
            <div className='profile-icon-box'>
                <div
                    className={`profile-container ${profileContainerClasses}`}
                    onClick={toggleProfile}
                >
                    {
                        auth ? (
                            <img
                                className='profile-image'
                                src={user.image}
                            />
                        ) : (
                            <i className='ri-login-box-line login-icon' />
                        )
                    }
                </div>
            </div>
            <div
                className={
                    `profile-menu-container${openProfileMenu ? ' opened' : ''}`
                }
            >

            </div>
        </>
    );
}