import React from "react";
import user from "../imgs/user.png"
import pharm from "../imgs/pharm.png"

export default function Header() {
    return(
        <div>
            <div>
                <img src={pharm} alt=""/>
                <p>PharmaInc.</p>
            </div>
            <figure>
                <img src={user} alt="" />
            </figure>
        </div>
    )
}