import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import DivisasForm from "./dashboardForm";
import { useNavigate } from "react-router-dom";

const DashboardContainer = () => {
  const [data, setData] = useState([""]);
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState({});
  let history = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");
  const [comission, setComission] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [tipo, setTipo] = useState("");
  const [edit, setEdit] = useState("");

  useEffect(() => {
    fetch("http://localhost:3002/api/v1/exchanges/")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log("error de:", err))
      .finally(() => console.log("exchanges cargados"));
  }, [newData, newData.delete]);

  const handleClose = () => {
    const accessToken = window.localStorage.getItem("token");
    axios.post(
      "http://localhost:3002/api/v1/exchanges/",
      newData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
      window.location.reload(),

      setShow(false)
    );
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    if (newData.delete != undefined) {
      const accessToken = window.localStorage.getItem("token");
      axios
        .delete(`http://localhost:3002/api/v1/exchanges/${newData.delete}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(alert("La informacion seleccionada fue eliminada"))
        .finally(window.location.reload());
    }
  }, [newData.delete]);

  useEffect(() => {
    if (newData.edit != undefined) {
      setEdit(
        data.filter(function (dato) {
          return dato.id === newData.edit;
        })
      );

      setShowEdit(true);
    }
  }, [newData.edit]);

  useEffect(() => {
    if (edit != undefined) {
      setTarget(edit[0]?.targetName);
      setSource(edit[0]?.sourceName);
      setTipo(edit[0]?.type);
      setFinalValue(parseFloat(edit[0]?.finalValue));
      setComission(parseFloat(edit[0]?.comission));
    }
  }, [edit]);

  const handleCloseEdit = () => {
    const datos = {
      id: newData.edit,
      targetName: target,
      type: tipo,
      sourceName: source,
      finalValue: finalValue,
      comission: comission,
    };

    const accessToken = window.localStorage.getItem("token");
    axios.put(
      "http://localhost:3002/api/v1/exchanges/",
      datos,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },

      window.location.reload(),
      setShowEdit(false)
    );
  };

  return (
    <DivisasForm
      data={data}
      show={show}
      handleShow={handleShow}
      handleClose={handleClose}
      setNewData={setNewData}
      setShow={setShow}
      showEdit={showEdit}
      setShowEdit={setShowEdit}
      newData={newData}
      handleCloseEdit={handleCloseEdit}
      edit={edit}
      setEdit={setEdit}
      target={target}
      setTarget={setTarget}
      source={source}
      setSource={setSource}
      tipo={tipo}
      setTipo={setTipo}
      comission={comission}
      setComission={setComission}
      finalValue={finalValue}
      setFinalValue={setFinalValue}
    />
  );
};

export default DashboardContainer;
