import { Form, Col, Row, Button, Card } from "react-bootstrap";
import Navbar from "../navbar/NavBar";

const PurchaseDetail = () => {
  // texto de prueba, debe mapearse con los datos del back
  return (
    <>
      <Navbar/>
      <h1 className="text-4xl d-flex text-center m-5" style={{ color: "#FFE603" }}>Detalle de compra</h1>
  
      <Row className="m-5">
      <h2 className="text-2xl d-flex text-center" style={{ color: "#FFE603" }}>Datos de usuario 👤</h2>
        <Col sm="8">
          <Form>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Nombre</Form.Label>
                  <Form.Control
                    required
                    placeholder="Ingresá tu nombre"
                    type="text"
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
                  />
                </Form.Group>
              </Col>
            </Row>

            <h2 className="text-2xl d-flex text-center " style={{ color: "#FFE603" }}>Dirección del envío 📦</h2>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Calle</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu calle"
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
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Piso/Depto</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu piso y/o departamento"
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Localidad</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Ingresá tu localidad"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label style={{ color: "#FFE603" }}>Provincia</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu provincia"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              variant="warning"
              className="m-5 mx-auto d-flex justify-content-center w-50 h-"
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
            <Card.Body style={{ backgroundColor: "white" }}>
              <Card.Title
                style={{ color: "black", backgroundColor: "white" }}
                className="text-center"
              >
                Resumen del pedido
              </Card.Title>
              <Card.Text
                className="fs-6"
                style={{ color: "black", backgroundColor: "white" }}
              >
                - Producto: Nirvana Smiley Tee
                <br />
                - Precio unitario: $24.99
                <br />
                - Cantidad: 1<br />- Total: $24.99
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PurchaseDetail;
