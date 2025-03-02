import React from "react";
import { Container } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contacto</h2>
      <p className="text-center">Dirección: Calle Falsa 123, Ciudad</p>
      <p className="text-center">Teléfono: +123 456 789</p>
      <p className="text-center">Email: info@restaurantedelicioso.com</p>
    </Container>
  );
};

export default Contacto;
