import { Form, Col, Row, Button } from "react-bootstrap";

const LogIn = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center mt-5">Iniciar sesión</h1>
      <Form>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Email</Form.Label>
            <Form.Control required placeholder="Ingresá tu email" type="email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4  d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control required type="password" placeholder="Ingresá tu contraseña" />
            <p className="mt-4">Olvidaste tu contraseña?</p>
            <Button
              type="submit"
              variant="dark"
              className="form-button mt-4 d-flex justify-content-center text-align-center align-items-center w-100"
            >
              INICIAR SESIÓN
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default LogIn;
