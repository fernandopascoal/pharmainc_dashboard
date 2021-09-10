import React, { useContext } from "react";
import Store, { AppContext } from "../contexts/Store";
import Clients from "../components/Clients";
import Header from "../components/Header";
import Search from "../components/Search";
import ClientsHeader from "../components/ClientsHeader";
import LoadMore from "../components/LoadMore";

function Dashboard () {

    return(
        <div >
            <header>
                <Header/>
            </header>
            <main>
                <Search/>
                <section>
                    <ClientsHeader/>
                    <Clients />
                </section>
                <LoadMore/>
            </main>
        </div>
    )
}


export default Dashboard