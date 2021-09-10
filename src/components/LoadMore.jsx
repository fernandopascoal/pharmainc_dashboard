import React  from "react";
import load from "../imgs/load.png"

export default function LoadMore(){
    return(
        <div>
            <button className="btn btn-outline-primary">
                <img src={load} alt="" className="me-2" />
                LoadMore
            </button>
        </div>
    )
}