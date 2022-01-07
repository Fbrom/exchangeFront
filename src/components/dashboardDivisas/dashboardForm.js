import { Form, Button, Table, Modal } from "react-bootstrap";
import React from "react";
import "./dashboardForm.css"

const DivisasForm = ({
  data,
  handleShow,
  show,
  handleClose,
  setNewData,
  setShow,
  setShowEdit,
  showEdit,
  handleCloseEdit,
  target,
  setTarget,
  source,
  setSource,
  tipo,
  setTipo,
  comission,
  setComission,
  finalValue,
  setFinalValue,
}) => {
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
          {data?.map((valor, index) => (
            <tr key={index}>
              <td key={valor?.sourceName}>{valor?.sourceName}</td>
              <td key={valor?.targetName}>{valor?.targetName}</td>
              <td key={valor?.comission}>{valor?.comission}</td>
              <td key={valor?.finalValue}>{valor?.finalValue}</td>
              <td key={valor?.type}>{valor?.type}</td>
              <td key={valor?.id}>
                <>
                  <Button
                    variant="primary"
                    name="edit"
                    id={valor?.id}
                    onClick={(e) => {
                      setNewData({ [e.target.name]: e.target.id });
                    }}
                  >
                    Edit
                  </Button>
                  <Modal
                    show={showEdit}
                    size="lg"
                    onHide={() => setShowEdit(false)}
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Edita esta divisa
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Fuente</th>
                            <th>Destino</th>
                            <th>Comisión</th>
                            <th>Valor</th>
                            <th>Tipo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Form.Control
                                name="sourceName"
                                size="lg"
                                type="text"
                                placeholder="Moneda de envio"
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                size="lg"
                                type="text"
                                name="targetName"
                                placeholder="Moneda de destino"
                                value={target}
                                onChange={(e) => setTarget(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                name="comission"
                                size="lg"
                                type="number"
                                value={comission}
                                onChange={(e) => setComission(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                name="finalValue"
                                size="lg"
                                type="number"
                                value={finalValue}
                                onChange={(e) => setFinalValue(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                name="type"
                                size="lg"
                                type="text"
                                placeholder="Tipo de moneda"
                                value={tipo}
                                onChange={(e) => setTipo(e.target.value)}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleCloseEdit}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
                <Button
                  variant="danger"
                  name="delete"
                  id={valor.id}
                  onClick={(e) => {
                    setNewData({ [e.target.name]: e.target.id });
                  }}
                >
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShow}>
        Crear divisas
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        animation={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Crea tu divisa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Fuente</th>
                <th>Destino</th>
                <th>Comisión</th>
                <th>Valor</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Control
                    name="sourceName"
                    size="lg"
                    type="text"
                    placeholder="Moneda de envio"
                    onChange={(e) => {
                      setNewData((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    size="lg"
                    type="text"
                    name="targetName"
                    placeholder="Moneda de destino"
                    onChange={(e) => {
                      setNewData((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    name="comission"
                    size="lg"
                    type="number"
                    placeholder="0"
                    onChange={(e) => {
                      setNewData((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    name="finalValue"
                    size="lg"
                    type="number"
                    placeholder="0"
                    onChange={(e) => {
                      setNewData((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    name="type"
                    size="lg"
                    type="text"
                    placeholder="Tipo de moneda"
                    onChange={(e) => {
                      setNewData((prevstate) => ({
                        ...prevstate,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DivisasForm;
