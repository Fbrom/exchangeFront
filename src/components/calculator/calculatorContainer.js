import React, { useEffect, useState, useContext } from "react";
import CalculatorForm from "./calculatorForm";
import CalculatorPage from "../../pages/calculatorPage";
import { GlobalExchange } from "../../context/globalcontext";
import { useNavigate } from "react-router-dom";
import { unique, calculator } from "../../util";

const CalculatorContainer = () => {
  const { createExchange, exchange } = useContext(GlobalExchange);
  const [data, setData] = useState([""]);
  const [optionsSource, setOptionsSource] = useState([""]);
  const [optionsTarget, setOptionsTarget] = useState([""]);
  const [selection, setSelection] = useState({});
  const [amount, setAmount] = useState(0);
  const [submit, setSubmit] = useState("false");
  const [result, setResult] = useState(0)

  let history = useNavigate();

  localStorage.clear();

  useEffect(() => {
    fetch("http://localhost:3002/api/v1/exchanges/")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log("error de:", err))
      .finally(() => console.log("exchanges cargados"));
  }, []);

  useEffect(() => {
    const options = data.map((dato) => dato.sourceName).filter(unique);
    setOptionsSource(options);
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
    }, [selection.source, amount, selection.target]);

    
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const finalExchange = {
      targetName: selection.target,
      sourceName: selection.source,
      amount: amount,
      result: result,
    };
    createExchange(finalExchange);

    history("/login");
  };

  return (
    <CalculatorForm
      result={result}
      optionsSource={optionsSource}
      optionsTarget={optionsTarget}
      setAmount={setAmount}
      amount={amount}
      setSubmit={setSubmit}
      handleSubmit={handleSubmit}
      // comission={comission}
      //finalValue={finalValue}
      setSelection={setSelection}
      selection={selection}
    />
  );
};

export default CalculatorContainer;
