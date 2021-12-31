import React, { useState, useContext } from "react";
import ConfirmContainer from "../components/confirm/confirmContainer";
import { GlobalExchange } from "../context/globalcontext";
import "./confirmOperationPage.css";
import NavBar from "./navBar";

const ConfirmPage = () => {
  return (
    <>
      <NavBar />
      <div className="componentConfirm">
        <div className="col-md-10 mx-auto">
          <div className="componentConfirmTitle col-md-12 mx-auto  row text-center">
            <h4>Conversor de Divisas</h4>
          </div>
          <div className="">
            <ConfirmContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPage;
