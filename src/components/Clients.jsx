import React, {useContext, useEffect} from "react"
import { AppContext } from "../contexts/Store"



export default function Clients() {
   
    const {clients, setClients} = useContext(AppContext)

    const loadClients = async function (){
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
        const result = await response.json();   
        setClients(result.results)
    }

    useEffect(() => {
        loadClients()
    }, [])
    



    const listClients = clients.map((client) => {

        let name = `${client.name.first} ${client.name.last}` 
        let birth = new Date(client.dob.date)
        const nasc = `${birth.getMonth()}/${birth.getDate()}/${birth.getFullYear()}`
        const id = `${client.id.name}${client.id.value}${client.cell}`
    
       return (
            <div key={id}>
                <p>
                    <span>{name} </span>
                    <span>{client.gender} </span>
                    <span>{nasc}</span>
                </p>
            </div>
       )
    })


    return (
        <div>
            <p>{listClients}</p>
        </div>
    )


}



