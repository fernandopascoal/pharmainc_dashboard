import React from "react";
import sort from "../imgs/sort.png"
import "../components/styles/ClientsHeader.css"

export default function ClientsHeader() {
    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-center" id="clientsheader">
                <div className="d-flex justify-content-center align-items-center border border-secundary" id="name">
                    <p className="mt-3 me-5">Name</p>      
                    <img src={sort} alt="" />
                </div>
                <p className="border border-secundary d-flex justify-content-center align-items-center" id="gender">Gender</p>
                <p className="border border-secundary d-flex justify-content-center align-items-center" id="birth">Birth</p>
                <p className="border border-secundary d-flex justify-content-center align-items-center" id="action">Action</p>
            </div>
        </div>
    )
}