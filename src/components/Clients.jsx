import React, {useContext, useEffect} from "react"
import { AppContext } from "../contexts/Store"
import "../components/styles/Clients.css"



export default function Clients() {
   
    const {clients, setClients} = useContext(AppContext)

    const loadClients = async function (){
        const response = await fetch("https://randomuser.me/api/?page=1&results=50&seed=abc")
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
            <div className="d-flex justify-content-center" key={id}>
                <div className="d-flex justify-content-center m-0" id="clientsContent">
                    <p className="border border-secundary m-0 d-flex justify-content-center align-items-center" id="clientName">{name} </p>
                    <p className="border border-secundary d-flex justify-content-center align-items-center" id="clientGender">{client.gender} </p>
                    <p  className="border border-secundary d-flex justify-content-center align-items-center" id="clientBirth">{nasc}</p>
                    <div className="border border-secundary d-flex align-items-center justify-content-center" id="buttonContainer" >
                        <button className="btn btn-info" id="moreDatails">More details</button>
                    </div>
                    
                </div>
            </div>
       )
    })


    return (
        <div>
            <p>{listClients}</p>
        </div>
    )


}



