import EventMenu from "./event-menu/event-menu"
import Profile from "./profile/profile";
import Map from "./map/map";
import SearchEvents from "./search-bar/search-bar";
import ToggleTheme from "./toggle-theme/toggle-theme";

import './content.css';
import fakeData from "../../fakeData";


export default function() {
    const { events } = fakeData;
    const { user, auth } = fakeData;

    return (
        <div className="content">

            <div className="navbar-box">
                <ToggleTheme />

                <Profile 
                    user={user}
                    auth={auth}
                />
            </div>

            {/* <Map /> */}

            <SearchEvents 
                placeholder="Enter event title..."
            />

            <EventMenu 
                events={events}
            />

        </div>
    );
}