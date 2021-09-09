import React from "react";
import search from "../imgs/search.png"

export default function Search() {
    return(
        <div>
            <input type="text" placeholder="Searching" />
            <img src={search} alt="" />
        </div>
    )
}