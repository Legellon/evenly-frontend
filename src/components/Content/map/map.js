import { useContext } from "react";

import { AppContext } from "../../../App";
import { ColorThemes } from "../../../App";

import "./map.css";

const lightThemeMap = "https://api.mapbox.com/styles/v1/puziboy/cl0jbj6v5000e16pmvjntxc55.html?title=false&access_token=pk.eyJ1IjoicHV6aWJveSIsImEiOiJjbDBqYjFtZnIwYXVhM2VwNmUxYTQ1aGRuIn0.Xg9JAhEe0H5ci0aKPfB9sQ&zoomwheel=true#12/59.4370/24.7536";
const darkThemeMap = "https://api.mapbox.com/styles/v1/puziboy/cl0jbd9g9004w15p1ftdysjh0.html?title=false&access_token=pk.eyJ1IjoicHV6aWJveSIsImEiOiJjbDBqYjFtZnIwYXVhM2VwNmUxYTQ1aGRuIn0.Xg9JAhEe0H5ci0aKPfB9sQ&zoomwheel=true#12/59.4370/24.7536";

export default function () {
    const { theme } = useContext(AppContext);
    return (
        <iframe
            className="map"
            src={theme === ColorThemes.DARK ? darkThemeMap : lightThemeMap}
        />
    );
}