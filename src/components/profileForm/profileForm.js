import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./profileForm.css";
import ReactFlagsSelect from "react-flags-select";
import React, { useEffect, useState, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const profileForm = ({
  user,
  name,
  setName,
  email,
  setEmail,
  telefono,
  setTelefono,
  fnacimiento,
  setFnacimiento,
  fExpedDoc,
  tipoDoc,
  nroDoc,
  direccion,
  ciudad,
  pais,
  dniForntal,
  dniPosterior,
  contraseña,
  setFExpedDoc,
  setTipoDoc,
  setNroDoc,
  setDireccion,
  setCiudad,
  setDniFrontal,
  setPais,
  apellido,
  setApellido,
  profesion,
  setProfesion,
  handleSubmit
}) => {
  console.log(name);
  console.log(pais);
  console.log(user);
  // const [selected, setSelected] = useState("");
  // const onSelect = (code ) => setSelected(code);
  // const searchable = boolean("Searchable", false);

  // const customLabels = object("Custom Labels", {
  //   GB: "GB",
  //   US: "US",
  // });

  return (
    <div className="allPage">
      {/* {console.log(user.profile.documentDate)} */}
      <div className="eachContainer">
        <div className="Row">
          <FaUserCircle color="lightblue" size={150} />
        </div>
        <div className="Row">
          <h3>Datos personales</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                placeholder="nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                disabled
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                type="number"
                maxLength={10}
                cds
                minLength={8}
                placeholder="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                type="date"
                placeholder={fnacimiento}
                value={fnacimiento}
                onChange={(e) => setFnacimiento(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                placeholder="profesion"
                value={profesion}
                onChange={(e) => setProfesion(e.target.value)}
              />
            </Col>
          </Row>
        
     
      <div className="eachContainer">
        <div className="Row">
          <h3>Datos personales de identificación</h3>
        </div>
        <div>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                placeholder="Nacionalidad"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                type="date"
                placeholder="Fecha de expedicion"
                value={fExpedDoc}
                onChange={(e) => setFExpedDoc(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control className="inputData" placeholder={tipoDoc} />
            </Col>
            <Col>
              <Form.Select className="inputData" size="sm">
                <option>Open this select menu</option>
                <option value="1">{tipoDoc}</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                onChange={(e) => setTipoDoc(e.target.value)}
              </Form.Select>
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                type="number"
                placeholder="nro de documento"
                value={nroDoc}
                onChange={(e) => setNroDoc(e.target.value)}
              />
            </Col>
          </Row>
          </div>
      </div>
      <div className="eachContainer">
        <div className="Row">
          <h3>Dirección</h3>
        </div>
        <div>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                placeholder="Ciudad"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col className="col-md-3">
              <Form.Control className="inputData" />
              <ReactFlagsSelect
              // selected={selected}
              // onSelect={onSelect}
              // customLabels={customLabels}
              // searchable={searchable}
              />
            </Col>
          </Row>
          </div>
      </div>
      <div className="eachContainer">
        <div className="Row">
          <h3>Datos personales de identificación</h3>
        </div>
        <div>
          <div className="dniFiles">
            <div className="inputfilecontainer col-md-5">
              <input
                name="file"
                id="file"
                className="inputFile"
                type="file"
              ></input>
              <label forhtml="file">
                <span className="iborrainputfile">DNI FRONTAL</span>
              </label>
            </div>
            <div className="col-md-1"></div>
            <div className="inputfilecontainer col-md-5">
              <input
                name="file"
                id="file"
                className="inputFile"
                type="file"
              ></input>
              <label forhtml="file">
                <span className="iborrainputfile">DNI POSTERIOR</span>
              </label>
            </div>
          </div>
          </div>
      </div>
      <div className="eachContainer">
        <div className="Row">
          <h3>Cambio de contraseña</h3>
          <div className="changePassword">
            <Form.Check type="switch" id="custom-switch" />
            <Form.Check disabled type="switch" id="disabled-custom-switch" />
            </div>
        </div>
        <div className="Row">
          <Button type="submit">GUARDAR DATOS</Button>
        </div>
      </div>
      
    </Form>
    </div>
    </div>

  );
};
export default profileForm;
