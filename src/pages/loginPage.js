import './loginPage.css';
import React, {useState} from "react"
import LoginContainer from '../components/login/loginContainer';
import loginImg from "../assets/loginImg.png"


const loginPage = () => {
    

    return (
        <>
       <div className= "" >
                    <div className="row">
                        <div className="col-md-5" >
                            <img src={loginImg} alt="send-money.img"/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <LoginContainer />
                        </div>
                    </div>
      </div>
      </>
    )
  }
  
export default loginPage