import React, {useContext, useState} from "react";
import sort from "../imgs/sort.png"
import {AppContext} from "../contexts/Store"
import "../components/styles/ClientsHeader.css"

export default function ClientsHeader() {

    const {clients, setClients} = useContext(AppContext)

    const [showGender, setShowGender] = useState(false)

    const newClients = [...clients]


    let orderList = []

    async function alphabetical() {
        orderList = await newClients.sort(function(a, b){
            if(a.name.first < b.name.first) { return -1; }
            if(a.name.first > b.name.first) { return 1; }
            return 0;
        })
            setClients(orderList)
      }

      function showListGender(){
          if(showGender === false) {
              setShowGender(true)
          } else {
              setShowGender(false)
          }
      }

      function orderGenderFemale(a) {
           if (a.gender === "female"){
               return a
           } 
      }

      function orderGenderMale(b) {
        if (b.gender === "male"){
            return b
        } 
   }


      function femaleGender(){
          let female = newClients.filter(orderGenderFemale);
            
            setClients(female)
            setShowGender(false)
        } 

        function maleGender(){
            let male = newClients.filter(orderGenderMale);
              
              setClients(male)
              setShowGender(false)
          } 

       

      

    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="d-flex justify-content-center" id="clientsheader">
                <div className="d-flex justify-content-center align-items-center border border-secundary" id="name">
                    <p className="mt-3 me-5">Name</p>      
                    <img src={sort} alt="" onClick={alphabetical} />
                </div>
                <div className="d-flex flex-column" id="gender">
                    <div className="border border-secundary d-flex justify-content-center align-items-center" >
                        <span>Gender</span>
                        <a className="ms-3" id="genderButton" onClick={() => showListGender()}>&or;</a>
                    </div>

                    { showGender ? 
                                    <div id="menu-container">
                                        <ul>
                                            <li onClick={femaleGender}>Female</li>
                                            <li onClick={maleGender} >Male</li>
                                        </ul> 
                                    </div>
                                    :
                                             null   }
                </div>
                <p className="border border-secundary d-flex justify-content-center align-items-center" id="birth">Birth</p>
                <p className="border border-secundary d-flex justify-content-center align-items-center" id="action">Action</p>
            </div>
        </div>
    )
}