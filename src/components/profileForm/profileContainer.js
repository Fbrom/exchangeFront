import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProfileForm from "./profileForm";
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {
  const [user, setUser] = useState({});
  const [contraseña, setContraseña] = useState([""]);
  const [show, setShow] = useState(false);
  const [contraseñaNueva, setContraseñaNueva] = useState("");
  const [contraseñaNueva1, setContraseñaNueva1] = useState("");
  const [contraseñaAntigua, setContraseñaAntigua] = useState("");
  const [email, setEmail] = useState([""]);
  const [selfie, setSelfie] = useState("");
  let history = useNavigate();

  useEffect(() => {
    const accessToken = window.localStorage.getItem("token");
    fetch("http://localhost:3002/api/v1/users/profile", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data.profile);
        setEmail(res.data.email);
      })
      .catch((err) => console.log("error de:", err))
      .finally(() => console.log("profile cargado"));
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

  useEffect(() => {
    const accessToken = window.localStorage.getItem("token");

    const selfie = ["61b905747b80565e94e34d99", "selfie", user.selfie];
    Axios.put(
      "http://localhost:3002/api/v1/users/profile/selfie/",
      { selfie },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }, [user.selfie]);

  const handleSelfie = (event) => {
    const accessToken = window.localStorage.getItem("token");
    Axios.put(
      "http://localhost:3002/api/v1/users/profile/selfie/",
      user.selfie,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    user.password = contraseñaAntigua;
    user.newPassword = contraseña;

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
      selfie={selfie}
      setSelfie={setSelfie}
      handleSelfie={handleSelfie}
      setContraseñaAntigua={setContraseñaAntigua}
      contraseñaAntigua={contraseñaAntigua}
    />
  );
};

export default ProfileContainer;
