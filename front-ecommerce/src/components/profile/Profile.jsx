import { Form, Col, Row, Button } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import { UserContext } from "../../services/authentication/user.context";
import { useContext, useState, useEffect } from "react";

const Profile = () => {
  // Obtener el contexto del usuario
  const { user, setUser } = useContext(UserContext);

  // Establecer los valores iniciales de los campos con los datos del usuario
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Actualizar los valores del formulario cuando el usuario cambie
  useEffect(() => {
    setFirstName(user?.firstName || "");
    setLastName(user?.lastName || "");
  }, [user]);

  // Función para validar nombre y apellido (solo letras y espacios permitidos)
  const isValidName = (name) => {
    const regex = /^[A-Za-z\s]+$/; // Solo letras y espacios
    return regex.test(name);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar que los campos 'firstName' y 'lastName' no estén vacíos
    if (!firstName || !lastName) {
      setError("El nombre y el apellido son obligatorios.");
      return; // Detenemos la ejecución si los campos están vacíos
    }

    // Validación de que el nombre y apellido solo contengan letras y espacios
    if (!isValidName(firstName) && !isValidName(lastName)) {
      setError("El nombre y el apellido no pueden contener números.");
      return;
    }

    if (!isValidName(firstName)) {
      setError("El nombre solo puede contener letras y espacios.");
      return;
    }

    if (!isValidName(lastName)) {
      setError("El apellido solo puede contener letras y espacios.");
      return;
    }

    // Crear el objeto de usuario actualizado con 'firstName' y 'lastName' para el backend
    const updatedUser = {
      firstName,  // Usamos 'firstName' en lugar de 'given_name'
      lastName,   // Usamos 'lastName' en lugar de 'family_name'
    };

    try {
      // Usamos el ID del usuario del contexto
      const response = await fetch(`https://localhost:7037/api/Client/UpdateClient/${user.sub}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`, // Usamos el token JWT
        },
        body: JSON.stringify(updatedUser), // Enviamos el objeto con 'firstName' y 'lastName'
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el perfil");
      }

      setSuccessMessage("Datos cambiados exitosamente.");
      alert("Datos cambiados exitosamente");

      // Si la actualización fue exitosa, actualizamos el contexto global
      const updatedData = { ...user, firstName, lastName }; // Actualizamos 'firstName' y 'lastName'
      setUser(updatedData);  // Actualiza el contexto global para reflejar el cambio en la app

      // Actualizamos también el estado local para que los inputs se actualicen
      setFirstName(firstName); // Esto actualizará el campo de 'Nombre' en el input
      setLastName(lastName);   // Esto actualizará el campo de 'Apellido' en el input

      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

    } catch (err) {
      setError("Error al actualizar el perfil");
      alert("Error al actualizar el perfil");
    }
  };

  // Función para limpiar el mensaje de error cuando el campo cambia
  const handleChange = (field, setField) => (event) => {
    const value = event.target.value;
    setField(value);
    // Eliminar el mensaje de error al cambiar el campo
    if (error) {
      setError("");
    }
  };

  return (
    <>
      <Navbar />
      <h1
        id="titleEditProfile"
        className="d-flex justify-content-center mt-5 mb-5 animated-text"
        style={{ fontSize: "40px" }}
      >
        Hola, {user?.firstName || firstName}! ⭐
      </h1>
      <Row className="m-5">
        <Col sm={8}>
          <h2
            id="secondTitleEdit"
            className="mb-5"
            style={{ fontSize: "32px" }}
          >
            Editar mi perfil
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Col sm="8">
                <Form.Label id="nameEdit" style={{fontSize: "20px"}}>Nombre</Form.Label>
                <Form.Control
                  value={firstName}
                  onChange={handleChange("firstName", setFirstName)} // Usamos la función de manejo genérico
                  placeholder="Editá tu nombre"
                  type="text"
                  className="mt-3 mb-3"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm="8">
                <Form.Label id="surnameEdit" style={{fontSize: "20px"}}>Apellido</Form.Label>
                <Form.Control
                  value={lastName}
                  onChange={handleChange("lastName", setLastName)} // Usamos la función de manejo genérico
                  type="text"
                  placeholder="Editá tu apellido"
                  className="mt-3 mb-3"
                />
              </Col>
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              className="mt-4 d-flex justify-content-center"
              style={{width: "535px"}}
            >
            EDITAR
            </Button>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
          </Form>
        </Col>
        <Col sm={4} className="d-flex justify-content-center align-items-start">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F57%2F48%2Fa1%2F5748a1955dcc01d819e04c52a977eb02.jpg&f=1&nofb=1&ipt=67b7d8e137f2dab07e3bf9422b8684c80d77fc152906c8cf6a9f9de15bdee9ca&ipo=images"
            alt="Imagen de usuario"
            style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Profile;
