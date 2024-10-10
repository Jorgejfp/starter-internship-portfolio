import React, { createContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import Routez from "./Routez";
import "./app.css";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Router>
                <div className="App" id={theme}>
                    <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                    <Routez />
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
