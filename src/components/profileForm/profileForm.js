import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./profileForm.css";
import ReactFlagsSelect from "react-flags-select";
import React, { useEffect, useState, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const profileForm = ({
  user,
  handleSubmit,
  handleClose,
  handleShow,
  show,
  setContraseñaNueva,
  setContraseñaNueva1,
  handleSave,
  setUser,
  email,
}) => {
  return (
    <div className="allPage">
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
                name="username"
                placeholder="nombre"
                value={user?.username}
                onChange={(e) => {
                  setUser((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                name="lastname"
                placeholder="Apellido"
                value={user?.lastname}
                onChange={(e) => {
                  setUser((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                disabled
                placeholder={email}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                name="phoneNumber"
                type="number"
                maxLength={10}
                cds
                minLength={8}
                placeholder="telefono"
                value={user?.phoneNumber}
                onChange={(e) => {
                  setUser((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="inputData"
                name="birthdate"
                type="date"
                value={user?.birthdate?.replace(/\//g, "-")}
                onChange={(e) => {
                  setUser((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value.replace(/\-/g, "/"),
                  }));
                }}
              />
            </Col>
            <Col>
              <Form.Control
                className="inputData"
                name="occupation"
                placeholder="profesion"
                value={user?.occupation}
                onChange={(e) => {
                  setUser((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
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
                    name="state"
                    placeholder="Nacionalidad"
                    value={user?.state}
                    onChange={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="inputData"
                    name="documentDate"
                    type="date"
                    value={user?.documentDate?.replace(/\//g, "-")}
                    onChange={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value.replace(/\-/g, "/"),
                      }));
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    className="inputData"
                    placeholder={user?.documentType}
                  />
                </Col>
                <Col>
                  <Form.Select
                    name="documentType"
                    className="inputData"
                    size="sm"
                  >
                    <option>Open this select menu</option>
                    <option value="1">{user?.documentType}</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    onChange=
                    {(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Control
                    className="inputData"
                    name="documentNumber"
                    type="number"
                    placeholder="nro de documento"
                    value={user?.documentNumber}
                    onChange={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
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
                    name="address"
                    placeholder="Dirección"
                    value={user?.address}
                    onChange={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="inputData"
                    name="city"
                    placeholder="Ciudad"
                    value={user?.city}
                    onChange={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
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
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={handleShow}
                />
                <Form.Check
                  disabled
                  type="switch"
                  id="disabled-custom-switch"
                />
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cambiá tu contraseña</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nueva contraseña"
                          onChange={(e) => setContraseñaNueva(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nueva contraseña"
                          onChange={(e) => setContraseñaNueva1(e.target.value)}
                        />
                      </Form.Group>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleSave}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
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
