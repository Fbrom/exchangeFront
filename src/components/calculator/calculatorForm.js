import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState, useContext } from "react";
import { HiCurrencyDollar } from "react-icons/hi";
import CalculatorContainer from "./calculatorContainer";
import Datos from "../../datos.json";
import { GlobalExchange } from "../../context/globalcontext";
import { Link } from "react-router-dom";

const CalculatorForm = ({
  selection,
  setSelection,
  handleSubmit,
  optionsSource,
  optionsTarget,
  setSource,
  setTarget,
  setAmount,
  amount,
  result,
}) => {
  

  return (
    <>
      <Form className="" value="true" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-md-5">
              <Form.Control
                value={amount}
                size="lg"
                type="number"
                placeholder="0"
                min="0"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div
              className="col-sm-2 col-md-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiCurrencyDollar color="blue" size={20} />
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Select
                size="lg"
                name="source"
                onChange={(e) => {
                  setSelection((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              >
                <option value="Select your currency" hidden>
                  Select your currency
                </option>
                {optionsSource.map((source) => (
                  <option value={source}>{source}</option>
                ))}
              </Form.Select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-md-5">
              <Form.Control
                disabled
                size="lg"
                type="number"
                placeholder="0"
                value={result}
              />
            </div>
            <div
              className="col-sm-2 col-md-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HiCurrencyDollar color="blue" size={20} />
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Select
                name="target"
                size="lg"
                onChange={(e) => {
                  setSelection((prevstate) => ({
                    ...prevstate,
                    [e.target.name]: e.target.value,
                  }));
                }}
              >
                <option value="Please select the origin currency" hidden>
                  Please select the origin currency
                </option>
                {optionsTarget.map((target) => (
                  <option value={target}>{target}</option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-grid gap-2">
            <Button
              disabled={
                amount == 0 ||
                selection.source == undefined ||
                selection.target == undefined
              }
              //href="/login"
              variant="primary"
              type="submit"
            >
              Siguiente
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default CalculatorForm;
