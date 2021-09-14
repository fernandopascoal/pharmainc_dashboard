import React, { useState, useEffect } from "react";
import { createContext } from 'react';

export const AppContext = createContext()

function Store(props) {
    const [clients, setClients] = useState([])
    const [modalContent, setModalContent] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [result, setResult] = useState([])

    const loadClients = async function (){
        const response = await fetch("https://randomuser.me/api/?page=1&results=50&seed=abc")
        const result = await response.json();   
        setClients(result.results)
        setResult(result.results)
    }

    useEffect(() => {
        loadClients()
    }, [])
    

    return (
        <AppContext.Provider value={{clients, setClients, modalContent, setModalContent, showModal, setShowModal, result, setResult}}>
            {props.children}
        </AppContext.Provider>
    )

} 

export default Store