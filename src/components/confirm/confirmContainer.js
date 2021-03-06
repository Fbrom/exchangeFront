import React, { useEffect, useState, useContext } from "react";
import ConfirmForm from "./confirmForm";
import { GlobalExchange } from "../../context/globalcontext";
import axios from "axios";
import { unique, calculator } from "../../util";

const ConfirmContainer = () => {
  const { createExchange, exchange } = useContext(GlobalExchange);

  const [data, setData] = useState([""]);
  const [optionsSource, setOptionsSource] = useState([""]);
  const [optionsTarget, setOptionsTarget] = useState([""]);
  const [selection, setSelection] = useState({
    source: exchange.sourceName,
    target: exchange.targetName,
  });
  const [amount, setAmount] = useState(exchange?.amount || 0);
  const [result, setResult] = useState(exchange?.result || 0);
  const [comission, setComission] = useState(0);
  // const [finalValue, setFinalValue] = useState("");


  useEffect(() => {
    fetch("http://localhost:3002/api/v1/exchanges/")
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => console.log("error de:", err))
      .finally(() => console.log("exchanges cargados"));
  }, []);

  useEffect(() => {
    const option = data.map((dato) => dato.sourceName).filter(unique);
    setOptionsSource(option);
  }, [data]);

  useEffect(() => {
    const options = data.filter(
      (target) => target.sourceName === selection.source
    );
    const option = options.map((dato) => dato.targetName);
    setOptionsTarget(option);
  }, [selection.source]);

  useEffect(() => {
    const options = data.filter(
      (targets) =>
        targets.sourceName === selection.source &&
        targets.targetName === selection.target
    );
    const comission = options[0]?.comission;
    const finalValue = options[0]?.finalValue;

    if(comission && finalValue){
      setResult(calculator(comission, finalValue, amount));
    }
    setComission(comission)
  }, [selection, amount]);

  useEffect(() => {
    setResult(parseFloat(result));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const sendMoney = {
      valueSent: amount,
      target: selection.target,
      source: selection.source,
      comission: comission,
      valueToSent: result,
      date: "",
    };
    const accessToken = window.localStorage.getItem("token");
    axios
      .post("http://localhost:3002/api/v1/transactions", sendMoney, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(alert("TU DINERO FUE ENVIADO"));
  };

  return (
    <ConfirmForm
      result={result}
      optionsSource={optionsSource}
      optionsTarget={optionsTarget}
      setAmount={setAmount}
      amount={amount}
      handleSubmit={handleSubmit}
      // comission={comission}
      // finalValue={finalValue}
      setSelection={setSelection}
      selection={selection}
      exchange={exchange}
    />
  );
};

export default ConfirmContainer;
