import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { setAccessToken } from "./accessToken";
import jwtDecode from "jwt-decode";

// Styled Components
import { GlobalStyles } from "./styledComponents/utils/GlobalStyles";
import Loader from "./styledComponents/Loader";

import "./general.css";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RedirectInfo from "./pages/RedirectInfo";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";
import Theme from "./components/Theme";
import { UserContext } from "./utils/userContext";
import SearchRedirects from "./pages/SearchRedirects";

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

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
                    const token = await res.json().then(res => res.accessToken);
                    setAccessToken(token);
                    setUser(jwtDecode(token));
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
        <UserContext.Provider value={{ user, setUser }}>
            <Theme>
                <GlobalStyles />
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/redirects"
                            render={() => (
                                <DefaultLayout title="Search Redirects">
                                    <SearchRedirects />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            path="/redirects/:redirect"
                            render={() => (
                                <DefaultLayout title="Redirect">
                                    <RedirectInfo />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <DefaultLayout title="Home">
                                    <Home />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/about"
                            render={() => (
                                <DefaultLayout title="About">
                                    <About />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/register"
                            render={() => (
                                <DefaultLayout title="Register">
                                    <Register />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/login"
                            render={() => (
                                <DefaultLayout title="Login">
                                    <Login />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/logout"
                            render={() => (
                                <DefaultLayout title="Logout">
                                    <Logout />
                                </DefaultLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/404"
                            render={() => (
                                <DefaultLayout title="Page Not Found">
                                    <NotFound />
                                </DefaultLayout>
                            )}
                        />
                        <Redirect to="/404" />
                    </Switch>
                </Router>
            </Theme>
        </UserContext.Provider>
    );
};

export default App;
