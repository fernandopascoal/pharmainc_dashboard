import React, { useContext, useEffect} from "react";
import { AppContext } from "../contexts/Store";
import Clients from "../components/Clients";
import Header from "../components/Header";
import Search from "../components/Search";
import ClientsHeader from "../components/ClientsHeader";
import LoadMore from "../components/LoadMore";
import Modal from "./Modal";

function Dashboard () {
    const {showModal, setShowModal} = useContext(AppContext)


    return(
        <div >
           <header>
                <Header/>
            </header>
            <main className="mt-5 pt-3">
                <Search/>
                <section>
                    <ClientsHeader/>
                    <Clients />
                </section>
                    <LoadMore/>
            </main>
            {showModal ? <Modal/> : null }
        </div>
    )
}


export default Dashboard