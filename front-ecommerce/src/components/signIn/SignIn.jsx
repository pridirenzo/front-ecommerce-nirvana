import { Form, Col, Row, Button } from "react-bootstrap";

const SignIn = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-5">Registrarse</h1>
      <Form>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              placeholder="Ingresá tu nombre"
              type="text"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              placeholder="Ingresá tu email"
              type="email"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4  d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingresá tu contraseña"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4  d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Confirmá tu contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Repetí tu contraseña"
            />
          </Col>
        </Form.Group>
        <Button
          type="submit"
          variant="dark"
          className="mt-4 mx-auto d-flex justify-content-center w-10"
        >
          REGISTRARME
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
