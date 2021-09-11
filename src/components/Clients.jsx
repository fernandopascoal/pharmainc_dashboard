import React, {useContext, useEffect} from "react"
import { AppContext } from "../contexts/Store"
import "../components/styles/Clients.css"
import { Link } from "react-router-dom"



export default function Clients() {
   
    const {clients, setClients} = useContext(AppContext)
    const {showModal, setShowModal} = useContext(AppContext)
    const {modalContent, setModalContent} = useContext(AppContext)

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
        let mouth = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][birth.getMonth()];
        const nasc = `${birth.getDate()}/${mouth}/${birth.getFullYear()}`
        const id = `${client.id.name}${client.id.value}${client.cell}`

        const personModal = `/modal/${id}`
        

        async function modalDetails(id) {
            
            setShowModal(true);
            setModalContent([client])
    
            return
        }
    
       return (
            <div className="d-flex justify-content-center" key={id}>
                <div className="d-flex justify-content-center m-0" id="clientsContent">
                    <p className="border border-secundary m-0 d-flex justify-content-center align-items-center" id="clientName">{name} </p>
                    <p className="border border-secundary d-flex justify-content-center align-items-center" id="clientGender">{client.gender} </p>
                    <p  className="border border-secundary d-flex justify-content-center align-items-center" id="clientBirth">{nasc}</p>
                    <div className="border border-secundary d-flex align-items-center justify-content-center" id="buttonContainer" >
                        <button className="btn btn-sm btn-outline-info" id="moreDetails" onClick={() => modalDetails(id)}>More details</button>
                    </div>
                    
                </div>
            </div>
       )
    });


    return (
        <div>
            <p>{listClients}</p>
        </div>
    )


}



