/** @format */

import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
const NavbarOffcanvas = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary hidden sm:flex fixed w-full top-0 left-0 z-50">
      <Container>
        <Navbar.Brand href="/">Jhony Car</Navbar.Brand>
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
