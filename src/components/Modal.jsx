import React, { useContext } from "react";
import { AppContext } from "../contexts/Store";
import "../components/styles/Modal.css"
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

function Modal(props) {

    const history = useHistory()
    const location = useLocation()



    const {clients, setClients} = useContext(AppContext)
    const {modalContent, setModalContent} = useContext(AppContext)
    const {showModal, setShowModal} = useContext(AppContext)

   
    const clickOut = (e) => {
       setShowModal(false)
    }
    
    const detailsClient = modalContent.map((client) => {

        const name = `${client.name.title} ${client.name.first} ${client.name.last}` 
        let date = new Date(client.dob.date)
        let mouth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Ouctober", "November", "Dezember"][date.getMonth()];
        const birth = `${date.getDate()} ${mouth} ${date.getFullYear()}`
        const id = `${client.id.value}`
        const address = `${client.location.street.name} ${client.location.street.number} - ${client.location.city} - ${client.location.state}`
        const photo = client.picture.large

        if(showModal) {
            return (
            
                <div className="d-flex flex-column justify-content-center align-items-center" id="modal" onClick={clickOut}>
                    <div className="d-flex flex-column justify-content-center rounded-3 border border-info bg-light" id="container" key={id}>
                        <figure id="figure">
                            <img src={photo} alt="" id="clientImg"/>
                        </figure>
                        <div className="d-flex flex-wrap align-content-between mt-5" id="clientInfo">
                            <p className="w-50 text-start ps-2">Name: {name}</p>
                            <p className="w-50 text-start">Email: {client.email}</p>
                            <p className="w-50 text-start ps-2">Gender: {client.gender}</p>
                            <p className="w-50 text-start">Birth: {birth}</p>
                            <p className="w-50 text-start ps-2">Telephone: {client.cell}</p>
                            <p className="w-50 text-start">Nationality: {client.nat}</p>
                            <p className="w-50 text-start ps-2 mb-3">Address: {address} </p>
                            <p className="w-50 text-start">ID: {id}</p>
                            <p className="w-100 text-start ps-2">URL:{window.location.href}</p>
                        </div>
                        <Link className="btn btn-outline-danger mb-3 btn-sm" id="close" onClick={() => setShowModal(false)} to="/">Close</Link>
                    </div>
                </div>
            )
        }

        
    })



    return(
        <div>
            {detailsClient}
        </div>
    )
}

export default Modal