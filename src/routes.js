import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PharmaInc from "./views/PharmaInc";

function Routes() {

    return (
        <Router>    
            <Switch>
              <Route path="/" exact>
                <PharmaInc />
              </Route>
              <Route exact path="/modal/:id">
                <PharmaInc />
              </Route>
            </Switch>
        </Router>
      );
    }

    export default Routes