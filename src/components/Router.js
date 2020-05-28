import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import MainPage from "./MainPage";

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>

);
export default Router;