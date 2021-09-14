import React, {useContext}  from "react";
import load from "../imgs/load.png"
import "../components/styles/LoadMore.css"
import { AppContext } from "../contexts/Store";
import { useState } from "react/cjs/react.development";

export default function LoadMore(){

    const {result, setResult} = useContext(AppContext)
    const [page, setPage] = useState([1])

    let newPage = parseInt(page) 

    function addPage(a) {
        newPage = newPage + 1
        setPage(newPage)
        console.log(newPage)
    }

    
    
    
    const loadMore = async function (){
        const response = await fetch(`https://randomuser.me/api/?results=50&page=${newPage}&seed=b`)
        const resolve = await response.json();   
        const moreClients = [...result.concat(resolve.results)]
        setResult(moreClients)
        addPage()

    }

    

    return(
        <div className="m-5">
            <button className="btn btn-outline-primary" id="loadMore" onClick={loadMore}>
                <img src={load} alt="" className="me-2" />
                LoadMore
            </button>
        </div>
    )
}