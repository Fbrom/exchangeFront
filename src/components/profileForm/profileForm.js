import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./profileForm.css";
import ReactFlagsSelect, { Im } from "react-flags-select";
import React, { useEffect, useState, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import ImageUpLoader from 'react-images-upload'

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
      <Form onSubmit={handleSubmit}>
        <div className="Row">
        <Form.Control
          type="file"
          name="selfie"
          onChange={(e) => {
            setUser((prevstate) => ({
              ...prevstate,
              [e.target.name]: e.target.value,
            }))
          } } />
        </div>
        <div className="Row">
          <h3>Datos personales</h3>
        </div>
        
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
                <Col className="col-md-3">
                  <ReactFlagsSelect
                    selected={user?.birthCountry}
                    onSelect={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        birthCountry: e,
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
                  <Form.Group controlId="formBasicSelect">
                    <Form.Control
                      as="select"
                      name="documentType"
                      value={user?.documentType}
                      onChange={(e) => {
                        setUser((prevstate) => ({
                          ...prevstate,
                          [e.target.name]: e.target.value,
                        }));
                      }}
                    >
                      <option value="Documento Nacional de Identidad">
                        Documento Nacioanl de Identidad
                      </option>
                      <option value="Cedula de Identidad">
                        Cedula de identidad
                      </option>
                      <option value="Pasaporte">Pasaporte</option>
                    </Form.Control>
                  </Form.Group>
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
                  <ReactFlagsSelect
                    selected={user?.currentCountry}
                    onSelect={(e) => {
                      setUser((prevstate) => ({
                        ...prevstate,
                        currentCountry: e,
                      }));
                    }}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <div className="eachContainer">
            <div className="Row">
              <h3>Datos personales de identificación</h3>
            </div>
            <Col>
              <div>
                <div className="dniFiles">
                  <div className="inputfilecontainer col-md-5">
                    <Form.Label className="info_documentos_label">
                      DNI FRENTE
                    </Form.Label>
                    <Form.Control
                      className="info_documentos_campos"
                      type="file"
                      name="dniFront"
                      placeholder="DNI dorso"
                      onChange={(e) => {
                        setUser((prevstate) => ({
                          ...prevstate,
                          [e.target.name]: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div className="inputfilecontainer col-md-5">
                    <Form.Label className="info_documentos_label">
                      DNI POSTERIOR
                    </Form.Label>
                    <Form.Control
                      className="info_documentos_campos"
                      type="file"
                      name="dniFront"
                      placeholder="DNI dorso"
                      onChange={(e) => {
                        setUser((prevstate) => ({
                          ...prevstate,
                          [e.target.name]: e.target.value,
                        }));
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
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
