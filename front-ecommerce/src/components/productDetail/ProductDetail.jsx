import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavBar from "../navbar/NavBar";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1); // Control de cantidad
  const [size, setSize] = useState(""); // Control de tamaño

  const location = useLocation();
  const products = location.state.product;

  const categories = ["Prendas", "Discografia", "Accesorios", "Remeras", "Buzos", "Vinilos", "CDs"];

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  return (
    <>
      <NavBar/>
      <Container className="text-white" style={{ backgroundColor: "#010101", padding: "20px", maxWidth: "800px" }}>
        <Row className="mt-4">
          <Col xs="12">
            <p className="text-uppercase text-warning">{categories[products.idCategory - 1]} &gt; {products.name}</p>
          </Col>
        </Row>

        <Row>
          <Col sm="6" className="d-flex flex-column align-items-center">
            <img
              className="img-fluid"
              style={{ width: "700px" }}
              src={products.imageUrl}
              alt="Product"
            />
          </Col>

          <Col sm="6" className="text-start">
            {/* Aumentamos el tamaño del nombre del producto con Tailwind */}
            <h2 className="text-warning text-4xl">{products.name}</h2>
            <h3>{products.price.value}</h3>

            {/* Selector de cantidad */}
            <div className="d-flex align-items-center mt-3">
              <p className="me-3">Cantidad</p>
              <Button variant="light" onClick={() => handleQuantityChange(-1)}>-</Button>
              <span className="mx-3">{quantity}</span>
              <Button variant="light" onClick={() => handleQuantityChange(1)}>+</Button>
            </div>

            {/* Selector de tamaño */}
            <div className="mt-3">
              <p>Tamaño</p>
              <div className="d-flex">
                {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
                  <Button
                    key={sizeOption}
                    variant={size === sizeOption ? "warning" : "outline-light"}
                    onClick={() => handleSizeChange(sizeOption)}
                    className="me-2"
                  >
                    {sizeOption}
                  </Button>
                ))}
              </div>
            </div>

            {/* Botón de Comprar */}
            <Button variant="warning" className="mt-4 w-100">
              Comprar
            </Button>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
