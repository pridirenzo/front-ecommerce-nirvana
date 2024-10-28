import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../navbar/NavBar";

const Accesories = ({productsaccesories}) => {


  return (
    <>
      <Navbar />
      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1 id="landingTitle" className="d-flex justify-content-center mt-5 mb-5">
            Accesorios
          </h1>
        </Container>
      </div>
      
      <div className="d-flex justify-content-center mt-4 gap-3">
     
      {Array.isArray(productsaccesories) &&
          productsaccesories
            // .filter((product) => product.idCategory === 3)
            // .slice(0, 3) // Solo toma los primeros 3 productos
            .map((product, index) => (
              <Card
                key={index}
                className="hover-card"
                style={{ width: "20rem" }}
              >
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title style={{ color: "yellow" }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="dark">Comprar</Button>
                </Card.Body>
              </Card>
            ))}

      <span id="MERCH"></span> {/* Identificador para la sección de contacto */}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en Accesorios 
        </Button>
      </div>
    </>
  );
};

export default Accesories;

Accesories.propTypes = {
  productsaccesories: PropTypes.function
};
