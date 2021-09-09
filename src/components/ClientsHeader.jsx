import React from "react";
import sort from "../imgs/sort.png"

export default function ClientsHeader() {
    return(
        <div>
            <div>
                <p>Name</p>
                
                <img src={sort} alt="" />
            </div>
            <p>Gender</p>
            <p>Birth</p>
            <p>Action</p>
        </div>
    )
}