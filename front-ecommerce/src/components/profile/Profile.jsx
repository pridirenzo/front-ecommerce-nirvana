import { Form, Col, Row, Button } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import { UserContext } from "../../services/authentication/user.context";
import { useContext } from "react";

const Profile = () => {
  
  const { user } = useContext(UserContext);
  
  return (
    <>
      <Navbar/>
      <h1 className="d-flex justify-content-center mt-5 mb-5" style={{fontSize: "30px"}}>
        Hola {user.given_name} 
      </h1> 
      {/* hay que validar que cuando venga no venga user, no rompa*/}
      <Row className="m-5">
        <Col sm={8}>
          <h2 className="mb-5" style={{fontSize: "30px"}}>Editar mi perfil</h2>
          <Form>
            <Form.Group as={Row}>
              <Col sm="8">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  placeholder="Editá tu nombre"
                  type="text"
                  className="mt-3 mb-3"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm="8">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Editá tu apellido"
                  className="mt-3 mb-3"
                />
                <Button
                  type="submit"
                  variant="dark"
                  className="mt-4 d-flex justify-content-center w-100"
                >
                  EDITAR
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Col>
        <Col sm={4} className="d-flex justify-content-center align-items-start">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F57%2F48%2Fa1%2F5748a1955dcc01d819e04c52a977eb02.jpg&f=1&nofb=1&ipt=67b7d8e137f2dab07e3bf9422b8684c80d77fc152906c8cf6a9f9de15bdee9ca&ipo=images"
            alt="Nirvana image"
            style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Profile;
