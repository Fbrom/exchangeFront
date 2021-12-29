import React, { useEffect, useState, useContext } from "react";
import LoginForm from "./loginForm";
import Axios from "axios";
import { GlobalExchange } from "../../context/globalcontext";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState("false");
  const [finalUser, setFinalUser] = useState([]);

  useEffect(() => {
    setUser(user);
  }, [user]);

  useEffect(() => {
    setPassword(password);
    let final = [{ email: user, password: password }];

    setFinalUser(final);
  }, [password]);

  let history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const bodyParameters = finalUser[0];

    Axios.post("http://localhost:3002/api/v1/auth/login", bodyParameters)
      .then((res) => {
        console.log(res);
        localStorage.removeItem("token");
        localStorage.setItem("token", res.data.data.token);
        console.log(res.status);
        history("/confirm");
      })
      .catch((err) => {
        alert("contraseña incorrecta");
        console.log("error de:", err);
      })
      .finally(() => console.log("exchanges cargados"));
  };

  return (
    <LoginForm
      setUser={setUser}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginContainer;
