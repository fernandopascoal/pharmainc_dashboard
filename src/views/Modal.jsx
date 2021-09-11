import React, { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "../contexts/Store";
import "../components/styles/Modal.css"
function Modal() {
    const {showModal, setShowModal} = useContext(AppContext)
    const {clients, setClients} = useContext(AppContext)

    const modalClients = [...clients]

    const clickOut = (e) => {
        if(e.target.id === "modal"){
            setShowModal(false)
        }
    }

    const detailsClient = modalClients.map((client) => {
        <p>{client.gender}</p>
    })

    console.log(modalClients)


    return(
        <div className="d-flex flex-column justify-content-center align-items-center" id="modal" onClick={clickOut}>
            <div className="d-flex flex-column justify-content-center rounded-3 border border-info bg-light" id="container">
                <figure id="figure">
                    <img src="#######" alt="" id="clientImg"/>
                </figure>
                <div className="d-flex flex-wrap align-content-between mt-5" id="clientInfo">
                    <p className="w-50 text-start ps-2">Nome:{detailsClient}</p>
                    <p className="w-50 text-start">Email:</p>
                    <p className="w-50 text-start ps-2">Genero:</p>
                    <p className="w-50 text-start">Data de nascimento:</p>
                    <p className="w-50 text-start ps-2">Telefone:</p>
                    <p className="w-50 text-start">Nacionalidade:</p>
                    <p className="w-50 text-start ps-2">Endereço:</p>
                    <p className="w-50 text-start">ID:</p>
                    <p className="w-100 text-start ps-2">URL:</p>
                </div>
                <a className="btn btn-outline-danger mb-3 btn-sm" id="close" onClick={() => setShowModal(false)}>Close</a>
            </div>
        </div>
    )
}

export default Modal