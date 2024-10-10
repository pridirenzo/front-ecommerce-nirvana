import { Form, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate("/login");
  };

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

        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3" className="d-flex justify-content-between">
            <Button type="submit" variant="dark" className="form-button w-50">
              REGISTRARME
            </Button>
            <Button
              variant="dark"
              className="align-self-center form-button"
              onClick={handleAccountClick}>
              Ya tengo cuenta
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default SignIn;
