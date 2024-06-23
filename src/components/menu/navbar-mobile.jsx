/** @format */
import { Container, Nav, Offcanvas } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const NavbarOffcanvasMobile = () => {
  return (
    <Navbar fixed="top" expand="false" className="bg-body-tertiary mb-3 px-4 sm:hidden">
      <Container fluid>
        <Navbar.Brand href="/">Jhony Car</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-false`}
          aria-labelledby={`offcanvasNavbar-expand-false`}
          placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/register">Cadastro</Nav.Link>
              <Nav.Link href="/solicitation">Solicitações</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarOffcanvasMobile;
