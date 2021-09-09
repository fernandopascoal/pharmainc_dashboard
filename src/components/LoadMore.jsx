import React  from "react";
import load from "../imgs/load.png"

export default function LoadMore(){
    return(
        <div>
            <a>
                <img src={load} alt="" />
                LoadMore
            </a>
        </div>
    )
}