import { Form, Button } from "react-bootstrap";
import React from "react";

const confirmForm = ({
  selection,
  setSelection,
  handleSubmit,
  optionsSource,
  optionsTarget,
  setAmount,
  amount,
  result,
}) => {
  return (
    <>
      <Form className="formConfirm" value="true" onSubmit={handleSubmit}>
        <div>
          <div className="row">
            <h5 className="text-center">¿Cuanto vas a enviar?</h5>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Valor</h6>
              <Form.Control
                className="formConfimInput"
                style={{
                  border: 0,
                  background: "rgb(246, 246, 246)",
                }}
                value={amount}
                size="lg"
                type="number"
                placeholder="0"
                min="0"
                onChange={(e) => setAmount(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h6>moneda</h6>
              <Form.Select
                className="formConfimInput"
                style={{
                  border: 0,
                  background: "rgb(246, 246, 246)",
                }}
                size="lg"
                name="source"
                onChange={(e) => {
                  setSelection((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              >
                <option key="option" value="" hidden>
                  {selection.source}
                </option>
                {optionsSource.map((source) => (
                  <option key={Math.random()} value={source}>
                    {source}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <h5 className="text-center">La persona recibe</h5>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Valor</h6>
              <Form.Control
                className="formConfimInput"
                style={{
                  border: 0,
                  background: "rgb(246, 246, 246)",
                }}
                value={result}
                disabled
                size="lg"
                type="number"
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <h6>moneda</h6>
              <Form.Select
                className="formConfimInput"
                style={{
                  border: 0,
                  background: "rgb(246, 246, 246)",
                }}
                name="target"
                size="lg"
                onChange={(e) => {
                  setSelection((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              >
                <option value="" hidden>
                  {selection.target}
                </option>
                {optionsTarget.map((target) => (
                  <option key={Math.random()} value={target}>
                    {target}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="d-grid gap-2">
            <Button
              className="enviarDinero"
              disabled={
                amount == 0 ||
                selection.source == undefined ||
                selection.target == undefined
              }
              variant="primary"
              type="submit"
            >
              ENVIAR DINERO
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default confirmForm;
