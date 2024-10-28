import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../navbar/NavBar";

const Prendas = ({productsremeras, productsbuzos}) => {


  return (
    <>
      <Navbar />
      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1 id="landingTitle" className="d-flex justify-content-center mt-5 mb-5">
            Prendas
          </h1>
        </Container>
      </div>
      <h2 className="d-flex justify-content-center mt-5 mb-5">
        Remeras
      </h2>
      
      <div className="d-flex justify-content-center mt-4 gap-3">
     
    {Array.isArray(productsremeras) && productsremeras
      .map((product, index) => (
        <Card key={index} className="hover-card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="dark">Comprar</Button>
          </Card.Body>
        </Card>
    ))}
      <span id="MERCH"></span> {/* Identificador para la sección de contacto */}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en Remeras 
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">Buzos</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        
    {Array.isArray(productsbuzos) && productsbuzos
      .map((product, index) => (
        <Card key={index} className="hover-card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="dark">Comprar</Button>
          </Card.Body>
        </Card>
    ))}  

        <span id="MUSIC"></span> 
      </div>
     
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en Buzos
        </Button>
      </div>
    </>
  );
};

export default Prendas;

Prendas.propTypes = {
  products: PropTypes.function
};
