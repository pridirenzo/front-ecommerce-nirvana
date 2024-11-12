import { Form, Col, Row, Button } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import { UserContext } from "../../services/authentication/user.context";
import { useContext, useState, useEffect } from "react";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  // Estado para manejar los valores del formulario
  const [firstName, setFirstName] = useState(user?.given_name || "");
  const [lastName, setLastName] = useState(user?.family_name || "");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

   // Actualizar los valores locales cuando el usuario cambia
   useEffect(() => {
    if (user) {
      setFirstName(user.given_name); // Actualizar el estado con el valor de user.given_name
      setLastName(user.family_name);  // Actualizar el estado con el valor de user.family_name
    }
  }, [user]);

  const isValidName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName) {
      setError("El nombre y el apellido son obligatorios.");
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

    const updatedUser = {
      firstName,
      lastName,
      givenName: firstName, // Mapear firstName a givenName
      familyName: lastName, // Mapear lastName a familyName
    };

    try {
      const response = await fetch(
        `https://localhost:7037/api/Client/UpdateClient/${user.sub}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el perfil");
      }
      

      setSuccessMessage("Datos cambiados exitosamente.");
      setTimeout(() => setSuccessMessage(""), 3000);

      const updatedData = {
        ...user,
        firstName,
        lastName,
        givenName: firstName, // Actualizamos el givenName
        familyName: lastName, // Actualizamos el familyName
      };

      setUser(updatedData); // Esto actualiza el contexto y debería hacer re-renderizar Navbar y Profile
    } catch (error) {
      setError("Error al actualizar el perfil");
    }
  };

  
    const handleChange = (field, setter) => (event) => {
      setter(event.target.value);
  
      // Limpiar el error si el usuario está escribiendo
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
        Hola, {user?.given_name}! ⭐
      </h1>
      <Row className="m-5">
        <Col sm={8}>
          <h2 id="secondTitleEdit" className="mb-5" style={{ fontSize: "32px" }}>
            Editar mi perfil
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Col sm="8">
                <Form.Label id="nameEdit" style={{ fontSize: "20px" }}>
                  Nombre
                </Form.Label>
                <Form.Control
                  value={firstName}
                  onChange={handleChange("firstName", setFirstName)} 
                  placeholder="Editá tu nombre"
                  type="text"
                  className="mt-3 mb-3"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm="8">
                <Form.Label id="surnameEdit" style={{ fontSize: "20px" }}>
                  Apellido
                </Form.Label>
                <Form.Control
                  value={lastName}
                  onChange={handleChange("lastName", setLastName)} // Actualizamos el estado al escribir// Actualizamos el estado al escribir
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
              style={{ width: "535px" }}
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
