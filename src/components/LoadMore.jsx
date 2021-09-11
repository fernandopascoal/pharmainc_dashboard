import React, {useContext}  from "react";
import load from "../imgs/load.png"
import "../components/styles/LoadMore.css"
import { AppContext } from "../contexts/Store";

export default function LoadMore(){

    const {clients, setClients} = useContext(AppContext)

    
    
    const loadMore = async function (){
        const response = await fetch(`https://randomuser.me/api/?results=50`)
        const result = await response.json();   
        const moreClients = [...clients.concat(result.results)]
        setClients(moreClients)

    }

    

    return(
        <div className="m-5">
            <button className="btn btn-outline-primary" id="loadMore" onClick={loadMore}>
                <img src={load} alt="" className="me-2" />
                LoadMore
            </button>
        </div>
    )
}