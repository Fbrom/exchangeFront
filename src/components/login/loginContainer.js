import React, { useEffect, useState, useContext } from "react";
import LoginForm from "./loginForm";
import Axios from "axios";
import { GlobalExchange } from "../../context/globalcontext";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const { exchange } = useContext(GlobalExchange);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [finalUser, setFinalUser] = useState({});

  useEffect(() => {
    setUser(user);
  }, [user]);

  useEffect(() => {
    setPassword(password);
    const final = [{ email: user, password: password }];

    setFinalUser(final);
  }, [password]);

  let history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const bodyParameters = finalUser[0];

    if (exchange) {
      Axios.post("http://localhost:3002/api/v1/auth/login", bodyParameters)
        .then((res) => {
          localStorage.removeItem("token");
          localStorage.setItem("token", res.data.data.token);
          if (res.data.data.user.role.name === "ADMIN") {
            history("/dashboardDivisas");
          } else {
            history("/confirm");
          }
        })
        .catch((err) => {
          alert("contraseña incorrecta");
          console.log("error de:", err);
        })
        .finally(() => console.log("exchanges cargados"));
    } else {
      history("/");
    }
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
