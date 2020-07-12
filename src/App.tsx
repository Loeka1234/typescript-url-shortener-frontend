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
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const themeToggler = () =>
        theme === "light" ? setTheme("dark") : setTheme("light");

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route
                        path="/"
                        render={() => (
                            <DefaultLayout
                                title="Home"
                                toggleTheme={themeToggler}
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
