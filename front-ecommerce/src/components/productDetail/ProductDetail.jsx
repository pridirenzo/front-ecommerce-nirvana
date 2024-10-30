import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Navbar from "../navbar/NavBar";

const ProductDetail = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <h1 className="d-flex justify-content-center text-center mt-5">Detalle del producto</h1>
        <Row className="mt-5 mb-5 align-items-start">
          <Col sm="6" className="d-flex justify-content-center">
            <img
              className="img-fluid" 
              style={{ maxWidth: "100%", height: "auto" }} 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F1a1fc812-cc36-43bd-95d8-a74c2fccf64f_1.d6e06a21cd7375b28d52cc48a6928d78.jpeg&f=1&nofb=1&ipt=b430bfb47708b3399ec55cee4556cca74b88807ebd5f143bbade1d96426c7675&ipo=images"
              alt="Nirvana Smiley Tee"
            />
          </Col>
          <Col sm="6">
            <h2 className="text-center mt-5">Nirvana Smiley Tee</h2>
            <h3 className="text-center mt-3 mb-3">$24.99</h3>
            <Form className="m-5">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="3" className="fs-5">
                  Cantidad
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Ingresá la cantidad"
                    min="1"
                    className="mt-3 mb-3"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm="3" className="fs-5">
                  Talle
                </Form.Label>
                <Col sm="9">
                  <div className="mt-2">
                    <Form.Check
                      type="radio"
                      label="S"
                      name="size"
                      value="S"
                    />
                    <Form.Check
                      type="radio"
                      label="M"
                      name="size"
                      value="M"
                    />
                    <Form.Check
                      type="radio"
                      label="L"
                      name="size"
                      value="L"
                    />
                    <Form.Check
                      type="radio"
                      label="XL"
                      name="size"
                      value="XL"
                    />
                  </div>
                </Col>
              </Form.Group>
              <Button variant="dark" type="submit" className="mt-4">
                Comprar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
