import { Form, Col, Row, Button } from "react-bootstrap";
import { useState } from "react";

const ResetPassword = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setError("Por favor, completa todos los campos.");
      setSuccessMessage(""); // Limpiar mensaje de éxito si hay error
      return;
    }

    // Validación de formato de email (opcional, aunque HTML ya lo hace)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError("Por favor, ingresa un email válido.");
      setSuccessMessage(""); // Limpiar mensaje de éxito si hay error
      return;
    }


    setError(""); // Limpiar mensaje de error si todo es válido
    setSuccessMessage(""); // Limpiar mensaje de éxito previo si existe
   


    // fetcheo 1er endpoint restablecimiento d contra

    try {
      const response = await fetch("https://localhost:7037/api/Client/ResetPassword-Using-Email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email })
      });

      
      // Si la respuesta no es ok, lanzamos un error
    if (!response.ok) {
      const text = await response.text(); // Obtenemos el cuerpo de la respuesta como texto plano
      throw new Error(text); // Lanzamos un error con el mensaje del backend
    }
        // Si la respuesta es exitosa, obtenemos el texto y lo mostramos en un alert
      const text = await response.text(); // Obtener el texto de la respuesta

      alert(text); // Mostramos el mensaje del backend en un alert

      setSuccessMessage(text); // Si también quieres mostrarlo en la UI

  } catch (err) {
    alert(`Error: ${err.message}`); // Si ocurrió un error, mostramos el error en un alert
    setError(`Error: ${err.message}`);
    setSuccessMessage(""); // Limpiar mensaje de éxito si hay error
  }


    setEmail(""); // Limpiar el campo de email
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
