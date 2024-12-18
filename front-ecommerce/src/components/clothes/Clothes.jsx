import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../navbar/NavBar";
import CardProduct from "../cardProduct/CardProduct";
import { useNavigate } from "react-router-dom";

const Clothes = ({ productsremeras, productsbuzos }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const handleNavClick = (link) => {
      window.location.href = link;
  };

  return (
    <>
      <Navbar />
      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1
            id="landingTitle"
            className="d-flex justify-content-center mt-5 mb-5"
          >
            Prendas
          </h1>
        </Container>
      </div>
      <h2
        id="shirtTitle"
        className="d-flex justify-content-center mt-5 mb-5"
        style={{ fontSize: "25px" }}
      >
        Remeras
      </h2>

      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsremeras) &&
          productsremeras.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        <span id="MERCH"></span>{" "}
        {/* Identificador para la sección de contacto */}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button
          variant="dark"
          className="mt-2 mb-5"
          onClick={() => handleNavClick("/tees")}
        >
          Ver todo en Remeras
        </Button>
      </div>
      <h3
        id="jumperTitle"
        className="d-flex justify-content-center mt-5 mb-5"
        style={{ fontSize: "25px" }}
      >
        Buzos
      </h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsbuzos) &&
          productsbuzos.map((product, index) => (
            <CardProduct product={product} handleAddToCart={handleAddToCart} />
          ))}

        <span id="MUSIC"></span>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5" onClick={() => handleNavClick("/sweatshirts")}>
          Ver todo en Buzos
        </Button>
      </div>
    </>
  );
};

export default Clothes;

Clothes.propTypes = {
  productsremeras: PropTypes.array.isRequired,
  productsbuzos: PropTypes.array.isRequired,
};

//:) :P
