import { InputGroup, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../navbar/Navbar.css";
import search from "../icons/search.svg";
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

  const navigate = useNavigate(); 
 
  const handleAccountClick = () => {
    navigate("/register"); 
  };

  return (
    <>
      <Navbar data-bs-theme="dark" className="mi-navbar" sticky="top">
        <Container fluid className="mi-container">
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Merch">
              <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
              <NavDropdown.Item href="#buzos">Buzos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Música">
              <NavDropdown.Item href="#vinilos">Vinilos</NavDropdown.Item>
              <NavDropdown.Item href="#cds">CDs</NavDropdown.Item>
              <NavDropdown.Item href="#albumdigital">
                Albumes Digitales
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accesorios">
              <NavDropdown.Item href="#gorras">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="#pines">Pines</NavDropdown.Item>
              <NavDropdown.Item href="#otros">Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
    
          <Form inline className="custom-form me-3">
            <InputGroup>
              <Form.Control placeholder="Buscar" aria-label="Buscar" />
              <Button variant="outline-secondary">
                <img src={search} alt="search" />
              </Button>
            </InputGroup>
          </Form>

          <div className="d-flex align-items-center">
            <i
              className="icon-hover bi bi-person-circle"
              style={{
                backgroundColor: "#E6D901",
                color: "black",
                fontSize: "2rem",
              }}
              onClick={handleAccountClick}
            ></i>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
