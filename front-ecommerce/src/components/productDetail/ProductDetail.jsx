import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import NavBar from "../navbar/NavBar";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1); // Control de cantidad
  const [size, setSize] = useState(""); // Control de tamaño


  const images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F1a1fc812-cc36-43bd-95d8-a74c2fccf64f_1.d6e06a21cd7375b28d52cc48a6928d78.jpeg&f=1&nofb=1&ipt=b430bfb47708b3399ec55cee4556cca74b88807ebd5f143bbade1d96426c7675&ipo=images",
    "https://media.karousell.com/media/photos/products/2022/10/24/nirvana_smile_tshirt_1666609876_ccf5d2e9_progressive.jpg"
  ]

  const [image, setImage] = useState(images[0]);

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleImageChange = (image) => {
    setImage(image);
  }

  return (
    <>
      <NavBar />
      <Container className="text-white" style={{ backgroundColor: "#111", padding: "20px", maxWidth: "800px" }}>
        
        <Row className="mt-4">
          <Col xs="12">
            <p className="text-uppercase text-warning">Merch &gt; In Utero Tee</p>
          </Col>
        </Row>

        <Row>
          <Col sm="6" className="d-flex flex-column align-items-center">
            <img
              className="img-fluid"
              style={{ width: "700px" }}
              src={image}
              alt="In Utero Tee Front"
            />
            <div className="d-flex mt-3 mb-[30px]">
              {images.map((image, i) => (
                <img 
                  key={i}
                  className="img-thumbnail mx-1"
                  style={{ width: "110px", borderWidth: "3px", borderColor: "yellow", padding: "0px"}}
                  src={image}
                  alt="Thumbnail"
                  onClick={() => handleImageChange(image)}
                />
              ) )}
            </div>
          </Col>

          <Col sm="6" className="text-start">
            <h2 className="text-warning">In Utero Tee</h2>
            <h3>$24.99</h3>

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

            {/* Descripción del producto */}
            <p className="mt-4">
              In Utero album cover on the front and "In Utero" on the back. Printed on a superior combed, 100% ringspun cotton tee with custom Nirvana neck labels.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
