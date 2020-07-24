import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styledComponents/utils/Theme";
import { themeContext } from "../utils/themeContext";

export interface Props {}

const Theme: React.FC<Props> = ({ children }) => {
    const [lightMode, setLightMode] = useState(getTheme);

    useEffect(() => {
        console.log("useeffect");
        localStorage.setItem("lightMode", lightMode.toString());
    }, [lightMode]);

    function getTheme() {
        let useLightMode: any = localStorage.getItem("lightMode");
        if (useLightMode === "true") return true;
        if (useLightMode === "false") return false;
        return true;
    }

    return (
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            <themeContext.Provider value={{ lightMode, setLightMode }}>
                {children}
            </themeContext.Provider>
        </ThemeProvider>
    );
};

export default Theme;
