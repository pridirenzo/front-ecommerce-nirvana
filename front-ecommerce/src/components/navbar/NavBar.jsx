import { InputGroup, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../navbar/Navbar.css'
import search from '../icons/search.svg'


function NavBar() {
  return (
    <>
      <Navbar data-bs-theme="dark" className='mi-navbar' sticky="top">
        <Container fluid className='mi-container'>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand> 
          <Nav className="me-auto" >
            <Nav.Link href="#home" >Home</Nav.Link>
            <NavDropdown title="Merch">
                <NavDropdown.Item href="#remeras">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#buzos">Buzos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Música">
                <NavDropdown.Item href="#vinilos">Vinilos</NavDropdown.Item>
                <NavDropdown.Item href="#cds">CDs</NavDropdown.Item>
                <NavDropdown.Item href="#albumdigital">Albumes Digitales</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accesorios">
                <NavDropdown.Item href="#gorras">Gorras</NavDropdown.Item>
                <NavDropdown.Item href="#pines">Pines</NavDropdown.Item>
                <NavDropdown.Item href="#otros">Otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* <Form inline className="custom-form">
        <Row>
          <Col xs="auto" className='col'>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto"  className='col'>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> */}

        <Form inline className="custom-form">
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Buscar"
          aria-label="Buscar"
        />
        <Button variant="outline-secondary">
          <img src={search}/>
        </Button>
      </InputGroup>
        </Form>


        </Container>
      </Navbar> 
    </>
  );
}

export default NavBar;
