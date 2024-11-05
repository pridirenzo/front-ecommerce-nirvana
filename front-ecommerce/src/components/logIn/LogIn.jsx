import { Form, Col, Row, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UserContext } from "../../services/authentication/user.context";
 

const LogIn = ({ ClientLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const credentials = { email, password }; 
      const response = await ClientLog(credentials);  
      const token = response.data.token;
      
      const user = response.data.user;
      
      if (user) {
        localStorage.setItem("userToken", token);
        setUser(user);
        navigate("/");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      setError("Error al iniciar sesión");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <>
      <h1 id="loginTitle" className="d-flex justify-content-center mt-5" style={{ fontSize: "30px" }}>
        Iniciar sesión
      </h1>
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
            <Form.Label id="passTitle">Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingresá tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Link to="/resetpassword" className="mt-4" id="forgot-pass" style={{ textDecoration: "none", color: "red", fontSize: "13px" }}>
              ¿Olvidaste tu contraseña?
            </Link>
            <Button
              type="submit"
              variant="dark"
              className="form-button mt-4 d-flex justify-content-center text-align-center align-items-center w-100"
            >
              INICIAR SESIÓN
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};


LogIn.propTypes = {
  ClientLog: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LogIn;







  

  
