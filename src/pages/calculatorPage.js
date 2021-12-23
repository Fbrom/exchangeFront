
import './calculatorPage.css';
import React from "react"
import CalculatorContainer from "../components/calculator/calculatorContainer";

const CalculatorPage = (data) => {

    
    

    return (
        <>
       <div className= "component" >
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <ol>
                                <li value={1}>Indica monto y moneda que posees.</li>
                                <li value={2}>Verifica el monto y moneda que enviarás.</li>
                                <li value={3}>Procede a llenar el formulario y listo!</li>
                            </ol>
                        </div>
                        {/* <div className=".col-12 col-lg-auto">
                        
                        </div> */}
                        <div className="col-sm-12 col-md-6">
                            <CalculatorContainer />
                        </div>
                    </div>
      </div>
      </>
    )
  }
  
export default CalculatorPage