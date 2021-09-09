import React, { useContext } from "react";
import Store, { AppContext } from "../contexts/Store";
import Clients from "../components/Clients";
import Header from "../components/Header";
import Search from "../components/Search";

function Dashboard () {

    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Search/>
                <section>
                    <Clients />
                </section>
            </main>
        </div>
    )
}


export default Dashboard