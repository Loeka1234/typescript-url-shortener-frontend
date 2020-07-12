import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./general.css"

// Pages
import Home from "./pages/Home";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";


const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" render={() => (
                    <DefaultLayout title="Home">
                        <Home />
                    </DefaultLayout>
                )} />
            </Switch>
        </Router>
    );
};

export default App;
