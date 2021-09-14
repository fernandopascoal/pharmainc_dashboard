import React, { useEffect } from "react";
import { Redirect, Route, Switch, useParams } from "react-router";
import Dashboard from "../components/Dashboard";
import Modal from "../components/Modal";

function PharmaInc(props) {

    return(
        <div>
            <Dashboard />
            <Modal />
        </div>
        
    )
    
}

export default PharmaInc