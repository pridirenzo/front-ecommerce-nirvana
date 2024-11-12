import { Form, Col, Row, Button, Card } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../services/authentication/user.context";
import { PostOrder } from "../api/apiService.js";
import OrderSuccessfulModal from "./OrderSuccessfullModal.jsx";


const PurchaseDetail = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  const { user } = useContext(UserContext); // Obtener el usuario desde el contexto
  const [showOrderSuccessfulModal, setShowOrderSuccessfulModal] = useState(false);

  const handleOpenOrderSuccessfulModal = () => setShowOrderSuccessfulModal(true);

  const handleCloseModal = () => {
    setShowOrderSuccessfulModal(false);
    handleNavClick("/");
  };


  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [province, setProvince] = useState("");
  const [locality, setLocality] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const getProductVariantId = (item) => {
    if (item.idCategory === 4 || item.idCategory === 5) {
      // Si el producto tiene tallas (categoría 4 o 5)
      const variant = item.productVariants.find(
        (variant) => variant.size === item.size
      );
      return variant ? variant.id : null;
    } else {
      // Si el producto no tiene tallas
      return item.productVariants.length > 0
        ? item.productVariants[0].id
        : null;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const orderLines = cartItems.map((item) => ({
      idProductVariant: getProductVariantId(item),
      amount: item.quantity,
    })).filter(line => line.idProductVariant !== null); // Filtrar elementos sin id válido
  
    const orderData = {
      orderLines: orderLines, // Primero orderLines
      address: { streetName, streetNumber, province, locality }, // Luego address
    };
  
    try {
      await PostOrder(JSON.stringify(orderData));
      console.log("Order placed successfully:", JSON.stringify(orderData));
      handleOpenOrderSuccessfulModal();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };
  

  const handleNavClick = (link) => {
      window.location.href = link;
  };

  return (
    <>
      <Navbar />
      <h1
        className="text-4xl d-flex text-center m-5"
        style={{ color: "#FFE603" }}
      >
        Detalle de compra
      </h1>

      <Row className="m-5">
        <h2
          className="text-2xl d-flex text-center"
          style={{ color: "#FFE603" }}
        >
          Datos de usuario 👤
        </h2>
        <Col sm="8">
          <Form onSubmit={handleSubmit}>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Nombre</Form.Label>
                  <Form.Control
                    required
                    placeholder="Ingresá tu nombre"
                    type="text"
                    value={user ? user.given_name : ""}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu apellido"
                    value={user ? user.family_name : ""}
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>

            <h2
              className="text-2xl d-flex text-center"
              style={{ color: "#FFE603" }}
            >
              Dirección del envío 📦
            </h2>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Calle</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu calle"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Altura</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu altura"
                    value={streetNumber}
                    onChange={(e) => setStreetNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>
                    Provincia
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu provincia"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>
                    Localidad
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu localidad"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h2
              className="text-2xl d-flex text-center"
              style={{ color: "#FFE603" }}
            >
              Informacion de tarjeta 💳
            </h2>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>
                    Titular de la tarjeta
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá el nombre del titular"
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>
                    Número de tarjeta
                  </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Ingresá el número de la tarjeta "
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>
                    Fecha de vencimiento
                  </Form.Label>
                  <Form.Control required type="month" placeholder="MM/AAAA" />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>CVV</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Ingresá tu cód. de seguridad"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              type="submit"
              variant="warning"
              className="m-5 mx-auto d-flex justify-content-center w-50 h-"
              onClick={() => handleSubmit()}
            >
              FINALIZAR COMPRA
            </Button>
          </Form>
        </Col>

        <Col sm="4">
          <Card
            className="m-5"
            style={{ height: "400px", marginBottom: "20px" }}
          >
            <Card.Body
              style={{
                backgroundColor: "white",
                overflowY: "auto",
                maxHeight: "300px",
              }}
            >
              <Card.Title className="text-center" style={{ color: "black" }}>
                Resumen del pedido
              </Card.Title>
              <Card.Text className="fs-6" style={{ color: "black" }}>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div key={index}>
                      <strong>{item.name}</strong>
                      <br />
                      Cantidad: {item.quantity}
                      <br />
                      Total: ${item.price * item.quantity}
                      <br />
                      <br />
                    </div>
                  ))
                ) : (
                  <p>No hay productos en el carrito.</p>
                )}
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
              <h3 className="text-center" style={{ color: "black" }}>
                <strong>Total a pagar: ${totalPrice.toFixed(2)}</strong>
              </h3>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <OrderSuccessfulModal
        show={showOrderSuccessfulModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default PurchaseDetail;
