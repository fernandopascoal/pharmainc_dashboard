import React, { useState } from "react";
import { createContext } from 'react';

export const AppContext = createContext()

function Store(props) {
    const [clients, setClients] = useState([])
    const [showModal, setShowModal] = useState(false)

    return (
        <AppContext.Provider value={{clients, setClients, showModal, setShowModal}}>
            {props.children}
        </AppContext.Provider>
    )

} 

export default Store