import React from "react";
import { Carousel, Card, Button, Container } from "react-bootstrap";
import "/src/pages/Inicio.js"; // Importa el archivo de estilos

const Inicio = () => {
  // Array de platos
  const platos = [
    {
      id: 1,
      nombre: "Plato 1",
      descripcion: "Descripción del plato 1.",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      nombre: "Plato 2",
      descripcion: "Descripción del plato 2.",
      imagen: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      nombre: "Plato 3",
      descripcion: "Descripción del plato 3.",
      imagen: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="fondo-inicio">
      {" "}
      {/* Aplica la clase de fondo aquí */}
      <div className="contenido-inicio">
        {" "}
        {/* Contenedor semitransparente */}
        {/* Carrusel de imágenes */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bienvenidos a Restaurante Delicioso</h3>
              <p>Disfruta de los mejores platos de la ciudad.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Menú del día</h3>
              <p>Descubre nuestras especialidades.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* Sección de Menú */}
        <Container className="my-5">
          <h2 id="menu" className="text-center mb-4">
            Nuestro Menú
          </h2>
          <div className="row">
            {/* Mapeo dinámico de los platos */}
            {platos.map((plato) => (
              <div className="col-md-4 mb-4" key={plato.id}>
                <Card>
                  <Card.Img variant="top" src={plato.imagen} />
                  <Card.Body>
                    <Card.Title>{plato.nombre}</Card.Title>
                    <Card.Text>{plato.descripcion}</Card.Text>
                    <Button variant="primary">Ordenar</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Inicio;
