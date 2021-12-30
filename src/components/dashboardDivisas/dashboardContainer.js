import React, { useEffect, useState, useContext } from "react";
import DivisasForm from "./dashboardForm";


const DashboardContainer = () => {
  
    const [data, setData] = useState([""]);
  
    useEffect(() => {
      fetch("http://localhost:3002/api/v1/exchanges/")
        .then((res) => res.json())
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log("error de:", err))
        .finally(() => console.log("exchanges cargados"));
    }, []);
  
  
    return (
      <DivisasForm
        data={data}
      />
    );
  };
  
  export default DashboardContainer;