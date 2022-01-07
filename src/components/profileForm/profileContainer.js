import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProfileForm from "./profileForm";
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
  const [user, setUser] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [show, setShow] = useState(false);
  const [contraseñaNueva, setContraseñaNueva] = useState("");
  const [contraseñaNueva1, setContraseñaNueva1] = useState("");
  const [contraseñaAntigua, setContraseñaAntigua] = useState("");
  const [email, setEmail] = useState("");
  let history = useNavigate("");

  useEffect(() => {
    const accessToken = window.localStorage.getItem("token");
    fetch("http://localhost:3002/api/v1/users/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    
      .then((res) => res.json())
      .then((res) => {
        setUser(res?.data?.profile);
        setEmail(res?.data?.email);
      })
      .catch((err) => {console.log("error de:", err)
    })
      .finally(() => console.log("profile cargado"));

      if (accessToken === null){
        history("/login")
      }

  }, []);

  const handleClose = () => setShow(false);

  const handleSave = () => {
    setShow(false);

    if (contraseñaNueva === contraseñaNueva1 && contraseñaNueva.length >= 8) {
      setContraseña(contraseñaNueva);
      alert(
        "Su contraseña se modificó correctamente.                                    Recuerde guardar datos en la proxima pantalla para confirmar el cambio."
      );
    } else {
      alert("La contraseña debe tener al menos 8 caracteres o no coinciden");
    }
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    setUser(user);
  }, [user]);


  const handleSelfie = (event) => {
      const accessToken = window.localStorage.getItem("token");
      const file = new FormData();
      file.append("selfie", event.target.files[0]);
      Axios.put(
        "http://localhost:3002/api/v1/users/profile/selfie/",
         file ,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(window.location.reload())
    };

      // const handleDniFront = (event) => {
      //   const fileFront = new FormData();
      //   fileFront.append("dniFront", event.target.files[0]);
      //   user.dniFront= fileFront
      // };

      // const handleDniBack = (event) => {
      //   const fileBack = new FormData();
      //   fileBack.append("dniBack", event.target.files[0]);
      //   user.dniBack= fileBack
      //   console.log(user)
      // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contraseñaAntigua != "" && contraseña != "") {
    user.password = contraseñaAntigua;
    user.newPassword = contraseña;}
    console.log(user)

    const accessToken = window.localStorage.getItem("token");
    Axios.put("http://localhost:3002/api/v1/users/profile", user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(alert("Sus datos fueron modificados correctamente"))
      .then(history("/confirm"));
  };

  return (
    <ProfileForm
      handleSubmit={handleSubmit}
      setUser={setUser}
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      setShow={setShow}
      setContraseñaNueva={setContraseñaNueva}
      contraseñaNueva={contraseñaNueva}
      setContraseñaNueva1={setContraseñaNueva1}
      handleSave={handleSave}
      user={user}
      email={email}
      handleSelfie={handleSelfie}
      setContraseñaAntigua={setContraseñaAntigua}
      contraseñaAntigua={contraseñaAntigua}
      // handleDniFront={handleDniFront}
      // handleDniBack={handleDniBack}
    />
  );
};

export default ProfileContainer;
