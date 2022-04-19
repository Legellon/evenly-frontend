import { useState } from 'react';
import './profile.css';
import Login from '../event-login/Login';


interface ProfileProps {
    user: any
}

export default function Profile({ user }: ProfileProps) {
    const [openedProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

    const profileContainerStyles = [
        openedProfileMenu ? 'opened' : '',
        user ? '' : 'login',
    ].join(' ');

    function toggleProfileMenu() {
        setOpenProfileMenu(!openedProfileMenu);
    }

    function handleProfileClick() {
        if (user) {
            toggleProfileMenu();
        }
    }

    return (
        <>
            <div
                className={`profile-container ${profileContainerStyles}`}
                onClick={handleProfileClick} 
            >
                {user ?
                    (
                        <img
                            className='profile-image'
                            src={user.image}
                        />
                    ) : (
                        <Login />
                    )
                }
            </div>
            <div
                className={
                    `profile-menu-container${openedProfileMenu ? ' opened' : ''}`
                }
            >

            </div>
        </>
    );
}