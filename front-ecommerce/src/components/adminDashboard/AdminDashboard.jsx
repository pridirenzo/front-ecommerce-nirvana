import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import AdminNavbar from "../adminNavbar/AdminNavbar";

const AdminDashboard = () => {
  return (

    <>
      <div>
        <AdminNavbar/>
      </div>

      <h2 className="d-flex justify-content-center mt-5 mb-5">
        Modificar productos disponibles 🛠️
      </h2>
      <Container className="d-flex justify-content-center mb-4">
        <Button variant="dark" className="add-button w-50">
          Agregar producto ++
        </Button>
      </Container>
      <h3 className="d-flex justify-content-center">Prendas 🏷️</h3>
      <div className="d-flex justify-content-center mt-4">
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F1a1fc812-cc36-43bd-95d8-a74c2fccf64f_1.d6e06a21cd7375b28d52cc48a6928d78.jpeg&f=1&nofb=1&ipt=b430bfb47708b3399ec55cee4556cca74b88807ebd5f143bbade1d96426c7675&ipo=images"
          />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>
              Nirvana Smiley Tee
            </Card.Title>
            <Card.Text>$24.99</Card.Text>
            <Button variant="primary"  className="m-2">Modificar</Button>
            <Button variant="danger">Eliminar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en PRENDAS
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">
        Discografía 💿
      </h3>
      <div className="d-flex justify-content-center mt-4">
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop.nirvana.com%2Fcdn%2Fshop%2Ffiles%2FNirvana8LP_364c9355-edf0-4829-9cd3-8b1f37ec1674_600x.png%3Fv%3D1693935428&f=1&nofb=1&ipt=5e057ed8afaad1bbe0e3418ccd23d53265af25fa5a162a5fce288390eff09b2e&ipo=images"
          />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>
              In Utero 30th Anniversary 8LP Super Deluxe
            </Card.Title>
            <Card.Text>$324.98</Card.Text>
            <Button variant="primary" className="m-2">Modificar</Button>
            <Button variant="danger">Eliminar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en DISCOGRAFÍA
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">Accesorios 🎩</h3>
      <div className="d-flex justify-content-center mt-4">
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.aNzWNaBIBNVrCn2WUCQ1yAHaHa%26pid%3DApi&f=1&ipt=5ac3e0d52234c9294d0495c8478656e3da9ea032981410bce9fbb8d71bec7bc7&ipo=images"
          />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>
              Yellow Nevermind Patch
            </Card.Title>
            <Card.Text>$4.99</Card.Text>
            <Button variant="primary" className="m-2">Modificar</Button>
            <Button variant="danger">Eliminar</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en ACCESORIOS
        </Button>
      </div>
    </>
  );
};

export default AdminDashboard;
