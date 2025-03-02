import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Íconos
import "../styles.css"; // Importa el archivo de estilos

const Contacto = () => {
  return (
    <Container className="my-5 contacto-container">
      <h2 className="text-center mb-4 titulo-contacto">Contáctanos</h2>
      <Row className="justify-content-center">
        {/* Sección de información de contacto */}
        <Col md={4} className="mb-4">
          <div className="info-contacto">
            <h4 className="mb-4">Información de Contacto</h4>
            <div className="d-flex align-items-center mb-3">
              <FaPhone className="me-3 icono-contacto" />
              <p className="mb-0">+52 311-123-4567</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaEnvelope className="me-3 icono-contacto" />
              <p className="mb-0">info@longshixuan.com</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FaMapMarkerAlt className="me-3 icono-contacto" />
              <p className="mb-0">
                Calle Clavel 49 Villas del Roble, Tepic Nayarit
              </p>
            </div>
          </div>
        </Col>

        {/* Formulario de contacto */}
        <Col md={6}>
          <div className="formulario-contacto">
            <h4 className="mb-4">Envíanos un mensaje</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="tel" placeholder="Ingresa tu teléfono" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe tu mensaje aquí"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Enviar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
