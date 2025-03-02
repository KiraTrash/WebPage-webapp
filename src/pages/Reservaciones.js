import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar los estilos de Bootstrap

const Reservaciones = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    hora: "",
  });

  // Estado para controlar si se ha enviado el formulario
  const [submitted, setSubmitted] = useState(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Mostrar los datos ingresados
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Reserva tu Mesa</h2>
      <Card className="shadow">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    id="nombre"
                    placeholder="Ingresa tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    type="date"
                    id="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    id="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Reservar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Mostrar los datos ingresados después de enviar el formulario */}
      {submitted && (
        <Card className="shadow mt-4">
          <Card.Body>
            <h3 className="text-center mb-4">Reserva Confirmada</h3>
            <Alert variant="success">
              <p><strong>Nombre:</strong> {formData.nombre}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Fecha:</strong> {formData.fecha}</p>
              <p><strong>Hora:</strong> {formData.hora}</p>
            </Alert>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Reservaciones;