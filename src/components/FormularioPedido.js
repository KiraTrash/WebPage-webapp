import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const FormularioPedido = ({ plato, show, handleClose }) => {
  const [cantidad, setCantidad] = useState(1);
  const costoEnvio = 5.0; // Costo fijo de envío

  // Convertir el precio a número (elimina el símbolo "$")
  const precioNumerico = parseFloat(plato.precio.replace("$", ""));

  // Calcular subtotal, total y mostrar detalles del pedido
  const subtotal = precioNumerico * cantidad;
  const total = subtotal + costoEnvio;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Realizar Pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Información del producto */}
          <Form.Group className="mb-3">
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text" value={plato.nombre} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio Unitario</Form.Label>
            <Form.Control type="text" value={plato.precio} readOnly />
          </Form.Group>

          {/* Cantidad */}
          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
              min="1"
            />
          </Form.Group>

          {/* Costo de envío */}
          <Form.Group className="mb-3">
            <Form.Label>Costo de Envío</Form.Label>
            <Form.Control type="text" value={`$${costoEnvio.toFixed(2)}`} readOnly />
          </Form.Group>

          {/* Subtotal y Total */}
          <Form.Group className="mb-3">
            <Form.Label>Subtotal</Form.Label>
            <Form.Control type="text" value={`$${subtotal.toFixed(2)}`} readOnly />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Total a Pagar</Form.Label>
            <Form.Control type="text" value={`$${total.toFixed(2)}`} readOnly />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Confirmar Pedido
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormularioPedido;