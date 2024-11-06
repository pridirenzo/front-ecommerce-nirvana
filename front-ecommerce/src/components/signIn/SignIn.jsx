import { Form, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const SignIn = ({ createUser }) => {
  const navigate = useNavigate();
  
  // estado para las dimensiones de la ventana
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // función para actualizar las dimensiones de la ventana
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  // useEffect para agregar y limpiar el listener de resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    // Tenga al menos 8 caracteres (.{8,})
    // Contenga al menos una mayúscula ((?=.*[A-Z]))
    // Contenga al menos un número ((?=.*\d))
    // Contenga al menos un carácter especial ((?=.*[!@#$%^&*]))
    return passwordRegex.test(password);
  };

  const handleAccountClick = () => {
    navigate("/login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!validatePassword(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial");
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        role: 3,
        isActive: 1
      };

      const response = await createUser(userData);
      alert("Revise su correo para la confirmación");
      navigate("/login");
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
      alert("Error al crear la cuenta");
    }
  };

  return (
    <>
      <h1 id="registerTitle" className="d-flex justify-content-center mt-5" style={{fontSize: "30px"}}>Registrarse</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="nameTitle">Nombre</Form.Label>
            <Form.Control
              required
              placeholder="Ingresá tu nombre"
              type="text"
              name="firstName"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="surnameTitle">Apellido</Form.Label>
            <Form.Control
              required
              placeholder="Ingresá tu apellido"
              type="text"
              name="lastName"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="registerEmailTitle">Email</Form.Label>
            <Form.Control
              required
              placeholder="Ingresá tu email"
              type="email"
              name="email"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="registerPasswordTitle">Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingresá tu contraseña"
              name="password"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label id="registerPasswordTitle2">Confirmá tu contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Repetí tu contraseña"
              name="confirmPassword"
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
              onClick={handleAccountClick}
            >
              Ya tengo cuenta
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <span id="heightText" style={{ fontSize: "0.8em", marginRight: "10px" }}>
          Alto de pantalla: {dimensions.height}px 🖥️
        </span>
        <span id="widthText" style={{ fontSize: "0.8em" }}>
          Ancho de pantalla: {dimensions.width}px 🖥️
        </span>
      </div>
    </>
  );
};

SignIn.propTypes = {
  createUser: PropTypes.func.isRequired,
};

export default SignIn;
