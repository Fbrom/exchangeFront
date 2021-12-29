import React, {useState, useContext} from "react"
import ConfirmContainer from "../components/confirm/confirmContainer";
import { GlobalExchange } from "../context/globalcontext";
import './confirmOperationPage.css';
import NavBar from "./navBar"

const ConfirmPage = () => {
    const values = useContext(GlobalExchange);
    return( 
      <>
    <NavBar/>
    <div className="componentConfirm">
      
    {console.log(values)}
    <div className= "col-md-10 mx-auto">
      <div className="componentConfirmTitle col-md-12 mx-auto  row text-center">
        <h4>Conversor de Divisas</h4>
      </div>
      <div className="">
          <ConfirmContainer />
      </div>
  </div>
  </div>
  </>
    )
}
  
export default ConfirmPage