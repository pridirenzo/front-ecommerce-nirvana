import { Form, Col, Row, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../../services/authentication/user.context";
import Navbar from "../navbar/NavBar";


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
    <Navbar/>
      <h1 id="loginTitle" className="d-flex justify-content-center mt-5" style={{ fontSize: "30px" }}>
        Iniciar sesión
      </h1>
      <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <Form.Group as={Row} className="m-4">
          <Col>
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
        <Form.Group as={Row} className="m-4">
          <Col>
            <Form.Label id="passTitle">Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingresá tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Link to="/resetpassword" className="mt-2" id="forgot-pass" style={{ textDecoration: "none", color: "red", fontSize: "13px" }}>
              ¿Olvidaste tu contraseña?
            </Link>
            <Button
              type="submit"
              variant="dark"
              className="form-button mt-5 w-100 mb-5"
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
  ClientLog: PropTypes.func.isRequired
};

export default LogIn;




  

  
