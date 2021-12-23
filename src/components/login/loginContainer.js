import React, { useEffect, useState, useContext } from "react";
import LoginForm  from "./loginForm"
import Axios from 'axios'
import { GlobalExchange } from "../../context/globalcontext"




const LoginContainer = () => {
   
  const { exchanges }= useContext(GlobalExchange);

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [submit, setSubmit] = useState("false")
    const [finalUser, setFinalUser] = useState([])

 

    useEffect(() => {
      setUser(user)
  }, [user])


  useEffect(() => {
    setPassword(password)
    let final = [{email: user,
      password: password}]
      
      setFinalUser(final)
      
}, [password])

   

    const handleSubmit = (event) => {
        
        event.preventDefault();


          
       const bodyParameters = (finalUser[0]);

       Axios.post('http://localhost:3002/api/v1/auth/login', finalUser[0])
        .then(res=>{

          localStorage.setItem('token', res.data.data.token)
         
        })
    }

    
    
    return (
    
        <LoginForm setUser={setUser} setPassword={setPassword} handleSubmit={handleSubmit}/>
            )
}

export default LoginContainer