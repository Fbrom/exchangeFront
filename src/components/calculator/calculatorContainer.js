import React, { useEffect, useState, useContext } from "react";
import CalculatorForm from "./calculatorForm";
//simport datos from "../../datos.json";
import CalculatorPage from "../../pages/calculatorPage";
import { GlobalExchange } from "../../context/globalcontext";
import { useNavigate } from "react-router-dom";

const CalculatorContainer = () => {
  const { createExchange, exchange } = useContext(GlobalExchange);
  const [data, setData] = useState([]);
  const [optionsSource, setOptionsSource] = useState([]);
  const [optionsTarget, setOptionsTarget] = useState([]);
  const [selection, setSelection] = useState({});
  const [amount, setAmount] = useState();
  const [comission, setComission] = useState();
  const [finalValue, setFinalValue] = useState();
  const [submit, setSubmit] = useState("false");

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  let history = useNavigate();

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
    let option = data.map((dato) => dato.sourceName).filter(unique);
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

    const comission = options.map((dato) => dato.comission);
    setComission(comission);
    let finalValue = options.map((dato) => dato.finalValue);
    setFinalValue(finalValue);
  }, [selection.source, amount, selection.target]);

  function calculator(comission, finalValue, amount) {
    return amount * (1 - comission) * finalValue;
  }

  const result = calculator(comission, finalValue, amount);

  const handleSubmit = (event) => {
    event.preventDefault();
    let finalExchange = {
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
      //setSource={setSource}
      //setTarget={setTarget}
      setAmount={setAmount}
      amount={amount}
      setSubmit={setSubmit}
      handleSubmit={handleSubmit}
      comission={comission}
      finalValue={finalValue}
      setSelection={setSelection}
      selection={selection}
    />
  );
};

export default CalculatorContainer;
