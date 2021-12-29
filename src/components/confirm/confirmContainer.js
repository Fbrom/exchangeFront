import React, { useEffect, useState, useContext } from "react";
import ConfirmForm from "./confirmForm";
import CalculatorPage from "../../pages/calculatorPage";
import { GlobalExchange } from "../../context/globalcontext";
import { FaExchangeAlt } from "react-icons/fa";
//import ProfileForm from "../profileForm.js/profileForm"


const ConfirmContainer = () => {
  const { createExchange, exchange } = useContext(GlobalExchange);
  //console.log(exchange)


  const [data, setData] = useState([]);
  const [optionsSource, setOptionsSource] = useState([]);
  const [optionsTarget, setOptionsTarget] = useState([]);
  const [selection, setSelection] = useState({source:exchange[1].sourceName, target:exchange[1].targetName} ) 
  const [amount, setAmount] = useState([exchange[1].amount]);
  const [result, setResult] = useState([exchange[1].result]);
  const [comission, setComission] = useState();
  const [finalValue, setFinalValue] = useState();
  const [submit, setSubmit] = useState("false");
  const [user, setUser] = useState([]);
 
  
  //console.log(selection)
  //console.log(result)
  //console.log(amount)

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  //console.log(window.localStorage.getItem("token"))

 
  useEffect(() => {
    fetch('http://localhost:3002/api/v1/exchanges/')
        .then(res => res.json())
        .then((res) => {
            setData(res.data)
        })
        .catch(err => console.log('error de:', err))
        .finally(() => console.log('exchanges cargados'));
}, []);


useEffect(() =>{
  const accessToken = window.localStorage.getItem("token")
   fetch("http://localhost:3002/api/v1/users/profile", {
    
      headers: {
        Authorization: `Bearer ${accessToken}`}})
      .then(res => res.json())
        .then((res) => {
            setUser(res.data)
        })
        .catch(err => console.log('error de:', err))
        .finally(() => console.log('profile cargado'))
        

}, [])

  useEffect(() => {
    const option = data.map((dato) => dato.sourceName).filter(unique);
    setOptionsSource(option);
  }, [data]);

  useEffect(() => {
    const options = data.filter((target) => target.sourceName === selection.source);
    const option = options.map((dato) => dato.targetName);
    setOptionsTarget(option);
    //console.log(option)
  }, [selection.source]);


  useEffect(() => {
    const options = data.filter(
      (targets) =>
        targets.sourceName === selection.source && targets.targetName === selection.target
    );
      console.log(options)
    const comission = options.map((dato) => dato.comission);
    setComission(comission);
    let finalValue = options.map((dato) => dato.finalValue);
    setFinalValue(finalValue);

    function calculator(comission, finalValue, amount) {
      return amount * (1 - comission) * finalValue;
    }
    setResult(calculator(comission, finalValue, amount))
    
  }, [selection, amount]);


  useEffect(() => {
    
    setResult(result)
    console.log(result)
    
  }, []);
  
  

  
 


  const handleSubmit = (event) => {
    event.preventDefault();
    // let finalExchange = ({
    //   targetName: selection.target,
    //   sourceName: selection.source,
    //   amount: Number(amount),
    // });
    
    
    // createExchange(finalExchange)
    // console.log(user)
    

  };

  return (
    <ConfirmForm
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
      exchange={exchange}
    />
  );
};

export default ConfirmContainer;
