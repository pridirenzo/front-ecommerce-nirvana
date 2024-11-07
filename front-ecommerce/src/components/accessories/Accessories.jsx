import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import Navbar from "../navbar/NavBar";
import { CartContext } from "../cart/CartContext";
import { useNavigate } from "react-router-dom";
import ProtectedBuy from "../../routes/ProtectedBuy";
import CardProduct from "../cardProduct/CardProduct";

const Accesories = ({ productsaccesories }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
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
            Accesorios
          </h1>
        </Container>
      </div>
      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsaccesories) &&
          productsaccesories.map((product, index) => (
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
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en Accesorios
        </Button>
      </div>
    </>
  );
};

Accesories.propTypes = {
  productsaccesories: PropTypes.array.isRequired,
};

export default Accesories;
