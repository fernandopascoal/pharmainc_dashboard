import React from "react";
import search from "../imgs/search.png"
import "../components/styles/Search.css"

export default function Search() {
    return(
        <div className="search">
            <div className="mt-5 border border-secundary rounded-1 d-flex align-items-center bg-white justify-content-center" id="input"  >
                <input type="text" placeholder="Searching" />
                <img src={search} alt="" />
            </div>
        </div>
    )
}