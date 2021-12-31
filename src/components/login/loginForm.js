import { Form, Button, Row } from "react-bootstrap";
import React from "react";

const loginForm = ({ setUser, setPassword, handleSubmit }) => {
  return (
    <>
      <div className="row ">
        <h1>Echange Demo Login</h1>
      </div>
      <div className="row">
        <div className="row"></div>
        <div className="row">
          <h3>Acceder</h3>
        </div>
      </div>
      <div className="row">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 col-md-8" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              size="lg"
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-md-8" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="col-md-8" variant="primary" type="submit">
            Acceder
          </Button>
          <div className="col-md-12">
            <Button variant="link">¿Olvidó su contraseña?</Button>
            <Button variant="link">¿No tiene cuenta? Registrate</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default loginForm;
