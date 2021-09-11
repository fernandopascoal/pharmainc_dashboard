import React, { useState } from "react";
import { createContext } from 'react';

export const AppContext = createContext()

function Store(props) {
    const [clients, setClients] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState([])

    return (
        <AppContext.Provider value={{clients, setClients, showModal, setShowModal, modalContent, setModalContent}}>
            {props.children}
        </AppContext.Provider>
    )

} 

export default Store