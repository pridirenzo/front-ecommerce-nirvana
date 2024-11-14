import { Form, Col, Row, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../../services/authentication/user.context";
import Navbar from "../navbar/NavBar";
import jwt_decode from "jwt-decode"; 

const LogIn = ({ ClientLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();


  // Función para validar el formato del email
  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Expresión regular básica para emails
    return regex.test(email);
  };

  // Función para validar la contraseña con los requisitos especificados
  const isValidPassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/; // Al menos 8 caracteres, una mayúscula, una minúscula, y un carácter especial
    return regex.test(password);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();


     // Verificación de la validez del email
     if (!isValidEmail(email)) {
      alert("El email ingresado no es válido.");
      return; // Detenemos el envío si el email es inválido
    }

    // Verificación de la validez de la contraseña
    if (!isValidPassword(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un carácter especial.");
      return; // Detenemos el envío si la contraseña no cumple con la validación
    }



    try {
      const credentials = { email, password };
      const response = await ClientLog(credentials);
      
      // Si la respuesta es exitosa, procesamos el token
      const token = response.data;
      if (token) {
        setIsUpdating(true);
        const decodedUser = jwt_decode(token); // Decodificamos el token para obtener el usuario
        localStorage.setItem("userToken", token);
        localStorage.setItem("user", JSON.stringify(decodedUser)); // Guardamos el usuario en el localStorage
        setUser(decodedUser); // Actualizamos el contexto de usuario
        navigate("/"); // Redirigimos al inicio
        setIsUpdating(false);
      } else {
        setError("Credenciales incorrectas");
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      alert("Usuario o contraseña incorrecto. Por favor, intenta con otro.");
      
    // Verificar si el error tiene una respuesta
    // if (error.response) {
    //   const errorMessage = error.response.data.message || "Error desconocido"; // Manejar mensaje de error
    //   console.log("Mensaje del backend: ", errorMessage);  // Muestra el mensaje en consola

    //   if (errorMessage.includes("Usuario no registrado")) {
    //     alert("El usuario no está registrado.");
    //   } else if (errorMessage.includes("Contraseña incorrecta")) {
    //     alert("La contraseña es incorrecta.");
    //   } else if (errorMessage.includes("NotAllowedException")) {
    //     alert("Cuenta no registrada o acceso denegado.");
    //   } else {
    //     alert("Error al iniciar sesión. Intenta nuevamente.");
    //   }
    // } else {
    //   alert("Error desconocido en la respuesta del servidor.");
    // }
  }
  };

  return (
    <>
      <Navbar />
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
              disabled = {isUpdating}
            >
              INICIAR SESIÓN
            </Button>
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
