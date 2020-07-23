import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

// Styled Components
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styledComponents/utils/GlobalStyles";
import { lightTheme, darkTheme } from "./styledComponents/utils/Theme";
import Loader from "./styledComponents/Loader";

import "./general.css";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RedirectInfo from "./pages/RedirectInfo";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
import { setAccessToken } from "./accessToken";
import Logout from "./pages/Logout";

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const [theme, setTheme] = useState<"Light Mode" | "Dark Mode">(
        getLocalStorageTheme
    );
    const themeToggler = () => {
        const newTheme = theme === "Light Mode" ? "Dark Mode" : "Light Mode";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    function getLocalStorageTheme() {
        let themeFromLocalStorage: any = localStorage.getItem("theme");

        if (
            themeFromLocalStorage !== "Light Mode" &&
            themeFromLocalStorage !== "Dark Mode"
        )
            themeFromLocalStorage = "Light Mode";

        return themeFromLocalStorage;
    }

    // TODO: Add loader so it tries to get an access token before rendering te website
    useEffect(() => {
        fetch(process.env.REACT_APP_API_AUTH_ENDPOINT + "/token", {
            method: "POST",
            credentials: "include",
        })
            .then(async res => {
                if (res.status === 200) {
                    console.log(
                        "%cLogged in with refresh token.",
                        "color: lightgreen"
                    );
                    setAccessToken(
                        await res.json().then(res => res.accessToken)
                    );
                }
            })
            .catch(err => {
                console.log(
                    "%cCouldn't login with refresh token.",
                    "color: red"
                );
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Loader size="lg" />
        </div>
    ) : (
        <ThemeProvider theme={theme === "Light Mode" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route
                        path="/redirects/:redirect"
                        render={() => (
                            <DefaultLayout
                                title="Redirect"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <RedirectInfo />
                            </DefaultLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <DefaultLayout
                                title="Home"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <Home />
                            </DefaultLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/about"
                        render={() => (
                            <DefaultLayout
                                title="About"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <About />
                            </DefaultLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/register"
                        render={() => (
                            <DefaultLayout
                                title="Register"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <Register />
                            </DefaultLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/login"
                        render={() => (
                            <DefaultLayout
                                title="Login"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <Login />
                            </DefaultLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/logout"
                        render={() => (
                            <DefaultLayout
                                title="Logout"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <Logout />
                            </DefaultLayout>
                        )}
                    />
                    <Route
                        exact
                        path="/404"
                        render={() => (
                            <DefaultLayout
                                title="Page Not Found"
                                toggleTheme={themeToggler}
                                theme={
                                    theme === "Light Mode"
                                        ? "Dark Mode"
                                        : "Light Mode"
                                }
                            >
                                <NotFound />
                            </DefaultLayout>
                        )}
                    />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ThemeProvider>
    );
};

export default App;
