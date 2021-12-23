import React, {useState, useContext} from "react"
import { GlobalExchange } from "../context/globalcontext";


const ConfirmPage = () => {
    const values = useContext(GlobalExchange);

    console.log(values)
    return (
        <>
       <div className= "" >
                    <div className="row">
                       
                       <h1>Confirm Operation</h1>
                       
                    </div>
      </div>
      </>
    )
  }
  
export default ConfirmPage