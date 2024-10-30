import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

const NewResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el restablecimiento de contraseña
    if (!newPassword || !confirmPassword) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Aquí puedes añadir la lógica para enviar la nueva contraseña
    console.log("Nueva Contraseña:", newPassword);
    
    // Limpiar los campos después de enviar
    setNewPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <>
      <h1 id="newPasswordTitle" className="d-flex justify-content-center mt-5" style={{ fontSize: "30px" }}>
        Establecer Nueva Contraseña
      </h1>
      <p id="newPasswordText1" className="text-center mb-4 mt-4">
        Por favor, ingresá y confirmá tu nueva contraseña.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="newPass1">Nueva Contraseña</Form.Label>
            <Form.Control
              required
              placeholder="Ingresa tu nueva contraseña"
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="newPass2">Confirmar Contraseña</Form.Label>
            <Form.Control
              required
              placeholder="Confirma tu nueva contraseña"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </Col>
        </Form.Group>
        {error && <p className="text-danger text-center">{error}</p>}
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Button
              type="submit"
              variant="dark"
              className="form-button mt-4 d-flex justify-content-center w-100"
            >
              Establecer Nueva Contraseña
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default NewResetPassword;
