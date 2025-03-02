import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Reservaciones = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Reserva tu Mesa</h2>
      <Form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input type="date" className="form-control" id="fecha" />
        </div>
        <div className="mb-3">
          <label htmlFor="hora" className="form-label">
            Hora
          </label>
          <input type="time" className="form-control" id="hora" />
        </div>
        <button type="submit" className="btn btn-primary">
          Reservar
        </button>
      </Form>
    </Container>
  );
};

export default Reservaciones;
