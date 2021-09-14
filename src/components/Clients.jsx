import React, {useContext, useEffect} from "react"
import { AppContext } from "../contexts/Store"
import "../components/styles/Clients.css"
import { useState } from "react/cjs/react.development"
import { Link, withRouter, useLocation } from "react-router-dom"



function Clients(props) {

   let location=useLocation()

    const [newClients, setNewClients] = useState([])
    const {result, SetrResult} = useContext(AppContext)
    const {showModal, setShowModal} = useContext(AppContext)
    const {modalContent, setModalContent} = useContext(AppContext)

    useEffect(() => {
        setNewClients([...result])
    },[result])
        

    const listClients = newClients.map((client) => {

        async function modalDetails(id) {            

            if(!showModal){
                setModalContent([client])
                setShowModal(true)
            }
            return
        }

        


        let name = `${client.name.first} ${client.name.last}` 
        let birth = new Date(client.dob.date)
        let mouth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ouctober", "November", "Dezember"][birth.getMonth()];
        const nasc = `${birth.getDate()} ${mouth} ${birth.getFullYear()}`
        const id = `${client.cell}`

        if(props.id === id) {
            modalDetails();
            console.log(props.id)
        } 

       

    
       return (
            <div className="d-flex justify-content-center" key={id}>
                <div className="d-flex justify-content-center m-0" id="clientsContent">
                    <p className="border border-secundary m-0 d-flex justify-content-center align-items-center" id="clientName">{name} </p>
                    <p className="border border-secundary d-flex justify-content-center align-items-center" id="clientGender">{client.gender} </p>
                    <p  className="border border-secundary d-flex justify-content-center align-items-center" id="clientBirth">{nasc}</p>
                    <div className="border border-secundary d-flex align-items-center justify-content-center" id="buttonContainer" >
                        <Link className="btn btn-sm btn-outline-info" id="moreDetails" onClick={() => modalDetails()} to={{
                                                                                                                            pathname: `/modal/${id}`,
                                                                                                                            state: { background: location }
                                                                                                                        }}>More details</Link>
                    </div>
                    
                </div>
            </div>
       )
    });


    return (
        <div>
            {listClients}
        </div>
    )
}

export default withRouter(Clients)



