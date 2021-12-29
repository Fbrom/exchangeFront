import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProfileForm from "./profileForm";

const ProfileContainer = () => {
  const [user, setUser] = useState({});
  const [contraseña, setContraseña] = useState([]);
  const [show, setShow] = useState(false);
  const [contraseñaAntigua, setContraseñaAntigua] = useState("");
  const [contraseñaNueva, setContraseñaNueva] = useState("");
  const [contraseñaNueva1, setContraseñaNueva1] = useState("");
  const [email, setEmail] = useState([]);

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
  const handleShow = () => setShow(true);

  useEffect(() => {
    setUser(user);
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem("token");
    Axios.put("http://localhost:3002/api/v1/users/profile", user, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return (
    <ProfileForm
      handleSubmit={handleSubmit}
      setUser={setUser}
      handleClose={handleClose}
      handleShow={handleShow}
      show={show}
      setShow={setShow}
      setContraseñaAntigua={setContraseñaAntigua}
      setContraseñaNueva={setContraseñaNueva}
      contraseñaNueva={contraseñaNueva}
      setContraseñaNueva1={setContraseñaNueva1}
      handleSave={handleSave}
      user={user}
      email={email}
    />
  );
};

export default ProfileContainer;
