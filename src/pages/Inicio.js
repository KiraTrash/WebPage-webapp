import React, { useState } from "react";
import { Carousel, Card, Button, Container, Row, Col } from "react-bootstrap";
import FormularioPedido from "./components/FormularioPedido"; // Importa el componente
import "../styles.css"; // Importa el archivo de estilos

// Importa las imágenes
import plato1 from "../assets/plato1.jpeg";
import plato2 from "../assets/plato2.jpeg";
import plato3 from "../assets/plato3.jpeg";
import plato4 from "../assets/plato4.jpeg";
import plato5 from "../assets/plato5.jpeg";
import plato6 from "../assets/plato6.jpeg";

const Inicio = () => {
  const [showModal, setShowModal] = useState(false);
  const [platoSeleccionado, setPlatoSeleccionado] = useState(null);

  // Array de platos para el Slide 1
  const platos1 = [
    {
      id: 1,
      nombre: "Pollo Kung Pao",
      descripcion: "Un plato clásico que combina pollo, cacahuates, vegetales y chiles, todo en una salsa picante y sabrosa.",
      imagen: plato1, // Usa la variable importada
      precio: "$10.00",
    },
    {
      id: 2,
      nombre: "Cerdo Agridulce",
      descripcion: "Trozos de cerdo fritos y crujientes, acompañados de una salsa agridulce hecha con piña, pimientos y cebolla.",
      imagen: plato2, // Usa la variable importada
      precio: "$12.00",
    },
    {
      id: 3,
      nombre: "Chow Mein",
      descripcion: "Fideos salteados con vegetales, carne (pollo, cerdo o res) y una salsa ligera de soya.",
      imagen: plato3, // Usa la variable importada
      precio: "$15.00",
    },
  ];

  // Array de platos para el Slide 2
  const platos2 = [
    {
      id: 4,
      nombre: "Dim Sum",
      descripcion: "Pequeñas porciones de comida que incluyen dumplings, bollos al vapor, rollitos de primavera y otros bocados.",
      imagen: plato4, // Usa la variable importada
      precio: "$18.00",
    },
    {
      id: 5,
      nombre: "Pato Pekín",
      descripcion: "Pato asado con piel crujiente, servido con crepes, cebollín, pepino y salsa hoisin.",
      imagen: plato5, // Usa la variable importada
      precio: "$20.00",
    },
    {
      id: 6,
      nombre: "Mapo Tofu",
      descripcion: "Un plato picante de tofu suave cocinado con carne molida (generalmente cerdo), salsa de frijol fermentado y chiles.",
      imagen: plato6, // Usa la variable importada
      precio: "$22.00",
    },
  ];

  // Manejar el clic en "Ordenar"
  const handleOrdenar = (plato) => {
    setPlatoSeleccionado(plato);
    setShowModal(true);
  };

  // Cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fondo-inicio"> {/* Aplica la clase de fondo aquí */}
      <div className="contenido-inicio"> {/* Contenedor semitransparente */}
        {/* Carrusel de imágenes */}
        <Carousel fade>
          {/* Slide 1: Platos 1, 2, 3 */}
          <Carousel.Item>
            <Container className="my-5">
              <h2 id="menu" className="text-center mb-4 titulo-seccion">
                Nuestro Menú
              </h2>
              <Row>
                {platos1.map((plato) => (
                  <Col key={plato.id} md={4} className="mb-4">
                    <Card className="h-100 shadow-sm card-plato">
                      <Card.Img
                        variant="top"
                        src={plato.imagen} // Usa la ruta de la imagen
                        className="card-img-top"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="text-center">
                          {plato.nombre}
                        </Card.Title>
                        <Card.Text className="text-center flex-grow-1">
                          {plato.descripcion}
                        </Card.Text>
                        <Card.Text className="text-center text-success fw-bold">
                          {plato.precio}
                        </Card.Text>
                        <Button
                          variant="primary"
                          className="mt-auto"
                          onClick={() => handleOrdenar(plato)}
                        >
                          Ordenar
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>

          {/* Slide 2: Platos 4, 5, 6 */}
          <Carousel.Item>
            <Container className="my-5">
              <h2 id="menu" className="text-center mb-4 titulo-seccion">
                Nuestro Menú
              </h2>
              <Row>
                {platos2.map((plato) => (
                  <Col key={plato.id} md={4} className="mb-4">
                    <Card className="h-100 shadow-sm card-plato">
                      <Card.Img
                        variant="top"
                        src={plato.imagen} // Usa la ruta de la imagen
                        className="card-img-top"
                      />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="text-center">
                          {plato.nombre}
                        </Card.Title>
                        <Card.Text className="text-center flex-grow-1">
                          {plato.descripcion}
                        </Card.Text>
                        <Card.Text className="text-center text-success fw-bold">
                          {plato.precio}
                        </Card.Text>
                        <Button
                          variant="primary"
                          className="mt-auto"
                          onClick={() => handleOrdenar(plato)}
                        >
                          Ordenar
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>

        {/* Modal del formulario de pedido */}
        {platoSeleccionado && (
          <FormularioPedido
            plato={platoSeleccionado}
            show={showModal}
            handleClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default Inicio;