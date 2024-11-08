import { Form, Col, Row, Button, Card } from "react-bootstrap";
import Navbar from "../navbar/NavBar";

const PurchaseDetail = () => {
  // texto de prueba, debe mapearse con los datos del back
  return (
    <>
      <Navbar/>
      <h1 className="d-flex text-center m-5" style={{ color: "#FFE603" }}>Detalle de compra</h1>
      <h2 className="d-flex text-center m-5" style={{ color: "#FFE603" }}>Delivery 📦</h2>
      <Row className="m-5">
        <Col sm="8">
          <Form>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    placeholder="Ingresá tu nombre"
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
              <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu apellido"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu apellido"
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu dirección"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Departamento (opcional)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu departamento"
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Código postal</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Ingresá tu código postal"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu ciudad"
                  />
                </Form.Group>
              </Col>
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu provincia"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="m-5">
              <Col sm="4">
                <Form.Group>
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ingresá tu número de teléfono"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              variant="dark"
              className="m-5 mx-auto d-flex justify-content-center w-10"
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
