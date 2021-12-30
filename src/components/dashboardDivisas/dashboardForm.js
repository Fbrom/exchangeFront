import { Form, Button, Table } from "react-bootstrap";
import React from "react";

const DivisasForm = ({ data }) => {
  return (
    <>
      <h3>Listado de Divisas</h3>
      <Table responsive>
        <thead>
          <tr>
          <th>Fuente</th>
          <th>Destino</th>
          <th>Comisión</th>
          <th>Valor</th>
          <th>Tipo</th>
          <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((valor) => (
            <tr key={valor.id}>
              <td key={valor.sourceName}>{valor.sourceName}</td>
              <td key={valor.targetName}>{valor.targetName}</td>
              <td key={valor.comission}>{valor.comission}</td>
              <td key={valor.finalValue}>{valor.finalValue}</td>
              <td key={valor.type}>{valor.type}</td>
              <td key={valor.id}>
                <Button>edit</Button>
                <Button>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DivisasForm;
