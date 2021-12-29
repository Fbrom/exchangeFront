import React, { useEffect, useState, useContext } from "react";
//import LoginForm  from "./loginForm"
import Axios from "axios";
import { GlobalExchange } from "../../context/globalcontext";
import ProfileForm from "./profileForm";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";


const ProfileContainer = () => {
  const [user, setUser] = useState({profile:{}});
  const [name, setName] = useState();
  const [apellido, setApellido] = useState([]);
  const [email, setEmail] = useState([]);
  const [telefono, setTelefono] = useState([]);
  const [fnacimiento, setFnacimiento] = useState();
  const [fExpedDoc, setFExpedDoc] = useState([]);
  const [tipoDoc, setTipoDoc] = useState([]);
  const [nroDoc, setNroDoc] = useState([]);
  const [direccion, setDireccion] = useState([]);
  const [ciudad, setCiudad] = useState([]);
  const [pais, setPais] = useState([]);
  const [dniForntal, setDniFrontal] = useState([]);
  const [dniPosterior, setDniPosterior] = useState([]);
  const [contraseña, setContraseña] = useState([]);
  const [profesion, setProfesion] = useState([])
  useEffect(() => {
    
    const accessToken = window.localStorage.getItem("token");
    fetch("http://localhost:3002/api/v1/users/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data);
        console.log(res.data)
        
      })
      .catch((err) => console.log("error de:", err))
      .finally(() => console.log("profile cargado"));
  }, []);

  // useEffect(() => {
  //   console.log(user)
  //   for (var key in user) {
  //     if (user.hasOwnProperty(key)) {
  //       user[key] = 
  //     }
  //   }
  //   console.log(user)

  //    }, [user]);


  useEffect(()=>{
    console.log(user)
  setName(user.profile.username);
  setApellido(user.profile.lastname);
  setEmail(user.profile.email);
  setTelefono(user.profile.phoneNumber);
  setFnacimiento(user.profile.birdthdate);
  setFExpedDoc(user.profile.documentDate);
  setTipoDoc(user.profile.documentType);
  setNroDoc(user.profile.documentNumber);
  setDireccion(user.profile.address);
  setCiudad(user.profile.city);
  setDniFrontal(user.profile.username);
  setPais(user.profile.state);
  setProfesion(user.profile.occupation)
  }, [user])




  const handleSubmit = (event) => {
    event.preventDefault();

    const fnacimientoChanged= fnacimiento.replace(/\-/g, "/");
    

    const fExpedDocChanged = fExpedDoc.replace(/\-/g, "/");

    let userChanges = ({
      username: name,
      lastname: apellido,
      phoneNumber: telefono,
      birthdate: fnacimientoChanged,
      occupation: profesion,
      birthCountry: pais,
      currentCountry: pais,
      documentDate: fExpedDocChanged,
      documentNumber: nroDoc,
      documentType: tipoDoc,
      address: direccion,
      city: ciudad,
      password:"12345678",
      newPassword: "12345678",
      selfie:"60a1dc264cf8605d200a0182-jeferson-766.jpg",
      dniBack:"",
      dniFront:"",
      state:pais


      // username: name,
      // lastname: "Alvarado",
      // phoneNumber: "584755588789",
      // birthdate: "1996/07/30",
      // occupation: "Ingeniero/a",
      // birthCountry: "ARG",
      // currentCountry:"COL",
      // documentDate: "2000/07/30",
      // documentNumber: "12345678",
      // documentType: "Cédula de identidad",
      // address: "Dirección",
      // city:"Bogotá",
      // password: "12345678",
      // newPassword: "12345678",
      // selfie:"60a1dc264cf8605d200a0182-jeferson-766.jpg",
      //  dniBack: "",
      //  dniFront: "",
      //  state: ""

    });
    console.log(userChanges)
    const accessToken = window.localStorage.getItem("token");
    Axios.put('http://localhost:3002/api/v1/users/profile', userChanges, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }

  })};

  return (
    <ProfileForm
      handleSubmit={handleSubmit}
      setUser={setUser}
      apellido={apellido}
      setApellido={setApellido}
      user={user}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      telefono={telefono}
      setTelefono={setTelefono}
      fnacimiento={fnacimiento}
      setFnacimiento={setFnacimiento}
      fExpedDoc={fExpedDoc}
      tipoDoc={tipoDoc}
      nroDoc={nroDoc}
      direccion={direccion}
      ciudad={ciudad}
      pais={pais}
      dniForntal={dniForntal}
      dniPosterior={dniPosterior}
      contraseña={contraseña}
      setFExpedDoc={setFExpedDoc}
      setTipoDoc={setTipoDoc}
      setNroDoc={setNroDoc}
      setDireccion={setDireccion}
      setCiudad={setCiudad}
      setDniFrontal={setDniFrontal}
      setPais={setPais}
      profesion={profesion}
      setProfesion={setProfesion}
    />
  );
};

export default ProfileContainer;
