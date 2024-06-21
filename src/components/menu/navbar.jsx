/** @format */

import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavbarOffcanvas = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/register">Cadastro</Nav.Link>
            <Nav.Link href="/solicitation">Solicitações</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarOffcanvas;
