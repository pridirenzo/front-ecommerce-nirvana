import { Form, Col, Row, Button } from "react-bootstrap";
import { useState, useEffect} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import Navbar from "../navbar/NavBar";

const NewResetPassword = () => {

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(null); // Estado para guardar el token q viene del back

  const location = useLocation(); // obtener URL
  const navigate = useNavigate();  // Usar useNavigate para redirigir
 

  // Usar useEffect para obtener el token de la URL cuando el componente se monta
  useEffect(() => {
    // Obtener el parámetro 'token' de la URL
    const urlParams = new URLSearchParams(location.search);
    const tokenFromUrl = urlParams.get("token");

    if (tokenFromUrl) {
      setToken(tokenFromUrl); // Guardar el token en el estado
    } else {
      setError("No se ha encontrado el token de restablecimiento.");
    }
  }, [location]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");

    // fetcheo 2do endpoint restablecimiento d contra. envio nueva contra y token 

    try {
      const response = await fetch(
        "https://localhost:7037/api/Client/resetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            newPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un error al restablecer la contraseña.");
      }

      const data = await response.json();
      alert(data.message || "Restablecimiento exitoso");
      // Redirigir al login después de restablecer la contraseña
      navigate("/login"); 
      setError("");
    } catch (err) {
      alert(`Error: ${err.message}`);
    }

    setNewPassword("");
    setConfirmPassword("");
  };

    // Estilos en línea
    const pageStyle = {

      minHeight: "83vh",
      display: "flex",
      flexDirection: "column"
    }
  

  return (
    <>
    <div style={pageStyle}>
      <Navbar/>
      <h1
        id="newPasswordTitle"
        className="d-flex justify-content-center mt-5"
        style={{ fontSize: "30px" }}
      >
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
      </div>
    </>
  );
};

export default NewResetPassword;
