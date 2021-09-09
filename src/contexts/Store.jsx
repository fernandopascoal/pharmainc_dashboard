import React, { useState } from "react";
import { createContext } from 'react';

export const AppContext = createContext()

function Store(props) {
    const [clients, setClients] = useState([])

    return (
        <AppContext.Provider value={{clients, setClients}}>
            {props.children}
        </AppContext.Provider>
    )

} 

export default Store