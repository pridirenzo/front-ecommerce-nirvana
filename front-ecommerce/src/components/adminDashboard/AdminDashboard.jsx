import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import AdminNavbar from "../adminNavbar/AdminNavbar";
import { useState } from "react";
import CreateProductModal from "../modals/createmodals/CreateProductModal"

const AdminDashboard = ({products}) => {

  const [showCreateProductModal, setShowCreateProductModal] = useState(false);
  
  const handleOpenCreateProductModal = () => setShowCreateProductModal(true);

  const handleCloseModal = () => {
    setShowCreateProductModal(false);
  };  

  return (
    <>
      <div>
        <AdminNavbar/>
      </div>

      <h2 className="d-flex justify-content-center mt-5 mb-5">
        Modificar productos disponibles 🛠️
      </h2>
      <Container className="d-flex justify-content-center mb-4">
        <Button variant="dark" className="add-button w-50" onClick={handleOpenCreateProductModal}>
          Agregar producto ++
        </Button>
      </Container>
      <h3 className="d-flex justify-content-center">Prendas 🏷️</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        
      {Array.isArray(products) && products
      .filter(product => product.idCategory === 4 || product.idCategory === 5 ) 
      .slice(0, 4)  // Solo toma los primeros 3 productos
      .map((product, index) => (
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary"  className="m-2">Modificar</Button>
            <Button variant="danger">Eliminar</Button>
          </Card.Body>
        </Card>
      ))}
      
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en PRENDAS
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">
        Discografía 💿
      </h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        
      {Array.isArray(products) && products
      .filter(product => product.idCategory === 6 || product.idCategory === 7 ) 
      .slice(0, 4)  // Solo toma los primeros 3 productos
      .map((product, index) => (
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary"  className="m-2">Modificar</Button>
            <Button variant="danger">Eliminar</Button>
          </Card.Body>
        </Card>
      ))}

      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en DISCOGRAFÍA
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">Accesorios 🎩</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        
      {Array.isArray(products) && products
      .filter(product => product.idCategory === 3 ) 
      .slice(0, 4)  // Solo toma los primeros 3 productos
      .map((product, index) => (
        <Card className="hover-card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title style={{ color: "yellow" }}>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary"  className="m-2">Modificar</Button>
            <Button variant="danger">Eliminar</Button>
          </Card.Body>
        </Card>
      ))}

      </div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="dark" className="mt-2 mb-5">
          Ver todo en ACCESORIOS
        </Button>
      </div>

      <CreateProductModal
        show={showCreateProductModal}
        handleClose={handleCloseModal}
      />

    </>
  );
};

export default AdminDashboard;
