import React  from "react";
import load from "../imgs/load.png"
import "../components/styles/LoadMore.css"

export default function LoadMore(){
    return(
        <div className="m-5">
            <button className="btn btn-outline-primary" id="loadMore">
                <img src={load} alt="" className="me-2" />
                LoadMore
            </button>
        </div>
    )
}