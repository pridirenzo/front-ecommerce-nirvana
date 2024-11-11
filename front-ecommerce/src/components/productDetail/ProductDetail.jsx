import { useState, useContext } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import { useLocation, Link, useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import "../productDetail/ProductDetailStyle.css";
import { CartContext } from "../cart/CartContext";
import ProtectedBuy from "../../routes/ProtectedBuy";

const ProductDetail = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();
  const products = location.state.product;

  const [quantity, setQuantity] = useState(1); 
  const [size, setSize] = useState(""); 

  const categories = [
    "Prendas",
    "Discografia",
    "Accesorios",
    "Remeras",
    "Buzos",
    "Vinilos",
    "CDs",
  ];
  const categoryRoutes = {
    4: "/tees",
    5: "/sweatshirts",
    6: "/vinyls",
    7: "/cds",
    3: "/accessories",
    // Agrega más rutas según sea necesario
  };

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...products,
      quantity,
      size,
    };

    addToCart(productToAdd);
    navigate("/cart");
  };

  return (
    <>
      <NavBar />
      <Container
        className="text-white"
        style={{
          backgroundColor: "#010101",
          padding: "20px",
          maxWidth: "800px",
        }}
      >
        <Row className="mt-4">
          <Col xs="12">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to={categoryRoutes[products.idCategory]}>
                  {categories[products.idCategory - 1]}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{products.name}</BreadcrumbItem>
            </Breadcrumb>
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
            <h2 className="text-4xl mb-3">{products.name}</h2>
            <h3 style={{ color: "white" }} className="text-3xl">${products.price}</h3>

            <div className="align-items-center mt-3">
              <p className="me-3">Cantidad</p>
              <div className="d-flex align-items-center">
                <Button variant="dark" onClick={() => handleQuantityChange(-1)}>
                  <b>-</b>
                </Button>
                <span className="mx-3">{quantity}</span>
                <Button variant="dark" onClick={() => handleQuantityChange(1)}>
                  <b style={{ color: "white" }}>+</b>
                </Button>
              </div>
            </div>

            <div className="mt-3">
              <p>Tamaño</p>
              <div className="d-flex">
                {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
                  <Button
                    key={sizeOption}
                    variant={size === sizeOption ? "warning" : "dark"}
                    onClick={() => handleSizeChange(sizeOption)}
                    className="me-2"
                  >
                    {sizeOption}
                  </Button>
                ))}
              </div>
            </div>
            
            <ProtectedBuy>
            <Button
              variant="warning"
              className="mt-4 w-100 mb-5"
              onBuy={handleAddToCart}
            >
              Comprar
            </Button>
            </ProtectedBuy>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
