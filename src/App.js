import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Carousel,
  Card,
  Button,
} from "react-bootstrap"; // Importa los componentes necesarios
import Reservaciones from "./pages/Reservaciones";
import Contacto from "./pages/Contactos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Restaurante Delicioso</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/reservaciones">Reservaciones</Nav.Link>
                <Nav.Link href="/contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Configuración de rutas */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/reservaciones" element={<Reservaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          <p>
            &copy; 2023 Restaurante Delicioso. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
