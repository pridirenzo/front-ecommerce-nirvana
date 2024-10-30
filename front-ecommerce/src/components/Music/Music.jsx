import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../navbar/NavBar";

const Music = ({productsvinilos, productscds}) => {


  return (
    <>
      <Navbar />
      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1 id="musicLandingTitle" className="d-flex justify-content-center mt-5 mb-5">
            Discografía
          </h1>
        </Container>
      </div>
      <h2 id="vinylTitle" className="d-flex justify-content-center mt-5 mb-5">
        Vinilos
      </h2>
      
      <div className="d-flex justify-content-center mt-4 gap-3">
     
    {Array.isArray(productsvinilos) && productsvinilos
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
          Ver todo en Vinilos 
        </Button>
      </div>
      <h3 id="cdTitle" className="d-flex justify-content-center mt-5 mb-5">CDs</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        
    {Array.isArray(productscds) && productscds
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
          Ver todo en CDs
        </Button>
      </div>
    </>
  );
};

export default Music;

Music.propTypes = {
  products: PropTypes.function
};
