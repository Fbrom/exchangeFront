import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./profileForm.css";
import ReactFlagsSelect from "react-flags-select";
import React from "react";

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
  handleDniFront,
  // contraseñaAntigua,
  setContraseñaAntigua,
  handleSelfie,
  handleDniBack,
  dniFront,
  // setSelfie,
  // selfie
}) => {
  return (
    <div className="allPage">
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="eachContainer">
            <div className="Row">
              <input id="fileInput" type="file" onChange={handleSelfie}></input>
              <label htmlFor="fileInput" className="selfie">
                <img
                  className="selfie"
                  src={`http://localhost:3002/api/v1/files/users/${user?.selfie}`}
                  alt={user?.selfie}
                />
              </label>
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
          </div>
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
                <Col className="col-md-4"></Col>
                <Col className="col-md-3">
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
                    <input
                      id="dniInput"
                      name="dniFront"
                      type="file"
                      onChange={handleDniFront}
                    >
                    </input>
                    <label htmlFor="dniInput" className="DNIFRONT">
                      <img
                        className="DNIFRONT"
                        //src={`http://localhost:3002/api/v1/files/users/${user.dniFront}`}
                        alt={user?.dniFront}
                      />
                    </label>
                  </div>
                  <div className="inputfilecontainer col-md-5">
                    <input
                      id="dniInput"
                      name="dniFront"
                      type="file"
                      onChange={handleDniBack}
                    >
                    </input>
                    <label htmlFor="dniInput" className="DNIBACK">
                      <img
                        className="DNIBACK"
                        //src={`http://localhost:3002/api/v1/files/users/${user.dniBack}`}
                        alt={user?.dniBack}
                      />
                    </label>
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
                        <Form.Label>Antigua contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Nueva contraseña"
                          onChange={(e) => setContraseñaAntigua(e.target.value)}
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
