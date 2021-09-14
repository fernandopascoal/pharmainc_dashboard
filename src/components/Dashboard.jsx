import React, {useContext} from "react";
import Clients from "./Clients";
import Header from "./Header";
import Search from "./Search";
import ClientsHeader from "./ClientsHeader";
import LoadMore from "./LoadMore";
import {useParams} from "react-router-dom"
import { useEffect } from "react/cjs/react.development";
import {AppContext} from "../contexts/Store"

function Dashboard (props) {

    const {id} = useParams()
    const {showModal, setShowModal} = useContext(AppContext)

    useEffect(() => {
        if(!id) {
            setShowModal(false)
        }
    }, [])

    return(
            <div >
                    <header>
                        <Header/>
                    </header>
                    <main className="mt-5 pt-3">
                        <Search/>
                        <section>
                            <ClientsHeader/>
                            <Clients id={id} />
                        </section>
                            <LoadMore/>
                    </main>
            </div>
    )
}


export default Dashboard