import React from "react";
import searchImg from "../imgs/search.png"
import "../components/styles/Search.css"
import { useState, useContext } from "react/cjs/react.development";
import {AppContext} from "../contexts/Store"

export default function Search(){

    const {clients} = useContext(AppContext)
    const [search, setSearch] = useState()
    const { setResult} = useContext(AppContext)

    const searchClient = [...clients]

    

     const clientSearch = () => {

        var searchList = searchClient.filter(function (client) {

            if(client.name.first === search || client.nat === search){
        
                return client

          } else if(search === "") {

              return client

          }
        })

        if(search.length === 0) {
         setResult(searchClient)
       } else {
        setResult(searchList)
    }

        
}
     


    return(
        <div className="search p-0">
            <div className="mt-5 border border-secundary rounded-1 d-flex align-items-center bg-white justify-content-center p-0" id="input"  >
                <input type="text" placeholder="Searching First Name or Nat" id="search" className="ps-2" onChange={e => setSearch(e.target.value)}/>
                <figure className="d-flex  align-items-center justify-content-center m-0 btn btn-light" id="img" onClick={clientSearch}>
                    <img src={searchImg} alt="" />
                </figure>
            </div>
        </div>
    )
}