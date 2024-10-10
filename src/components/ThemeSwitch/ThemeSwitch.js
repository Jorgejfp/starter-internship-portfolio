import React, {memo} from "react";
import Switch from "react-switch";

function ThemeSwitch({ theme, toggleTheme }) {
    return (
        <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <Switch
                checked={theme === "dark"}
                onChange={toggleTheme}
                handleDiameter={25}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
                className="react-switch"
                id="material-switch"
                size="small"
            />
        </div>
    );
}

export default memo(ThemeSwitch);