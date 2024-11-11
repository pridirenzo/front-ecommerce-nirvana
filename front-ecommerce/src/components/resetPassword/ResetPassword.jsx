import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

const ResetPassword = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setError("Por favor, completa todos los campos.");
      alert("Por favor, completa todos los campos."); 
      return;
    }

    setError(""); 


    // fetcheo 1er endpoint restablecimiento d contra

    try {
      const response = await fetch("https://localhost:7037/api/Client/ResetPassword-Using-Email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Hubo un error durante el restablecimiento.");
      }

      const data = await response.json();
      alert(data); 
    } catch (err) {
      alert(`Error: ${err.message}`); 
    }

    setEmail("");
  };


  return (
    <>
      <h1 id="resetPasswordTitle" className="d-flex justify-content-center mt-5" style={{ fontSize: "30px" }}>
        Restablecer Contraseña
      </h1>
      <p id="explanationPasswordText" className="text-center mb-4 mt-4">
        Pedimos tu correo electrónico para proceder con el restablecimiento.
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="emailTitle">Email</Form.Label>
            <Form.Control
              required
              placeholder="Ingresá tu email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Button
              type="submit"
              variant="dark"
              className="form-button mt-4 d-flex justify-content-center w-100"
            >
              Restablecer Contraseña
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default ResetPassword;
