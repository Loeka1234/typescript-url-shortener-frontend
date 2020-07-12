import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styled Components
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styledComponents/utils/GlobalStyles";
import { lightTheme, darkTheme } from "./styledComponents/utils/Theme";

import "./general.css";

// Pages
import Home from "./pages/Home";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

const App: React.FC = () => {
    const [theme, setTheme] = useState<"Light Mode" | "Dark Mode">("Light Mode");
    const themeToggler = () =>
        theme === "Light Mode" ? setTheme("Dark Mode") : setTheme("Light Mode");

    return (
        <ThemeProvider theme={theme === "Light Mode" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route
                        path="/"
                        render={() => (
                            <DefaultLayout
                                title="Home"
                                toggleTheme={themeToggler}
                                theme={theme === "Light Mode" ? "Dark Mode" : "Light Mode"}
                            >
                                <Home />
                            </DefaultLayout>
                        )}
                    />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
