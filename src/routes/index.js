import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import VehiclePage from "../components/pages/vehicle/vehicle.page";
import StarshipPage from "../components/pages/starship/starship.page";
import ErrorPage from "../components/pages/error/error.page";
import DetailsPage from "../components/pages/details/details.page";

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => <Redirect to="/vehicles" />}
                />
                <Route
                    exact
                    path="/starship"
                    component={() => <Redirect to="/starships" />}
                />
                <Route path="/vehicles">
                    <VehiclePage />
                </Route>
                <Route path="/starships">
                    <StarshipPage />
                </Route>
                <Route path="/details">
                    <DetailsPage />
                </Route>
                <Route path="/error">
                    <ErrorPage />
                </Route>
                <Redirect to="/error" />
            </Switch>
        </Router>
    );
};

export default routes;
