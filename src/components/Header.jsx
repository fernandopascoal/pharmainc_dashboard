import React from "react";
import user from "../imgs/user.png"
import pharm from "../imgs/pharm.png"

export default function Header() {
    return(
        <div className="d-flex justify-content-between align-items-center bg-white p-3 pb-2 pt-2">
            <div className="d-flex  align-items-center">
                <img src={pharm} alt="" className="me-2"/>
                <div>
                <p className="d-flex m-0 fw-bold">PharmaInc.</p>
                </div>
            </div>
            <div className="d-flex  align-items-center">
                <img src={user} alt="" />
            </div>
        </div>
    )
}