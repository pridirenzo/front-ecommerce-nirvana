import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import { useState } from "react";
import CreateProductModal from "../modals/createmodals/CreateProductModal";
import ModifyProductModal from "../modals/modifymodals/ModifyProductModal";
import DeleteProductModal from "../modals/deletemodals/DeleteProductModal";

const AdminDashboard = ({
  productsprendas,
  productsmusic,
  productsaccesories,
}) => {
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);
  const [showModifyProductModal, setShowModifyProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleOpenCreateProductModal = () => setShowCreateProductModal(true);

  const handleOpenModifyProductModal = (product) => {
    setSelectedProduct(product);
    setShowModifyProductModal(true);
  };

  const handleOpenDeleteProductModal = (productId) => {
    setSelectedProductId(productId);
    setShowDeleteProductModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateProductModal(false);
    setShowDeleteProductModal(false);
  };

  const handleCloseModifyProductModal = () => {
    setShowModifyProductModal(false);
    setSelectedProduct(null);
  };

  const handleCloseDeleteProductModal = () => {
    setShowDeleteProductModal(false);
    setSelectedProductId(null);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <h2 className="d-flex justify-content-center mt-5 mb-5">
        Control de productos 🛠️
      </h2>
      <Container className="d-flex justify-content-center mb-4">
        <Button
          variant="dark"
          className="add-button w-50"
          onClick={handleOpenCreateProductModal}
        >
          Agregar producto ++
        </Button>
      </Container>
      <h3 className="d-flex justify-content-center">Prendas 🏷️</h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsprendas) &&
          productsprendas.map((product, index) => (
            <Card className="hover-card" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title style={{ color: "#FFE603" }}>
                  {product.name}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  className="m-2"
                  onClick={() => handleOpenModifyProductModal(product)}
                >
                  Modificar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleOpenDeleteProductModal(product.id)}
                >
                  Eliminar
                </Button>
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
        {Array.isArray(productsmusic) &&
          productsmusic.map((product) => (
            <Card className="hover-card" style={{ width: "20rem" }} key={product.id}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title style={{ color: "#FFE603" }}>
                  {product.name}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  className="m-2"
                  onClick={() => handleOpenModifyProductModal(product)}
                >
                  Modificar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleOpenDeleteProductModal(product.id)}
                >
                  Eliminar
                </Button>
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
        {Array.isArray(productsaccesories) &&
          productsaccesories.map((product, index) => (
            <Card className="hover-card" style={{ width: "20rem" }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title style={{ color: "#FFE603" }}>
                  {product.name}
                </Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  variant="primary"
                  className="m-2"
                  onClick={() => handleOpenModifyProductModal(product)}
                >
                  Modificar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleOpenDeleteProductModal(product.id)}
                >
                  Eliminar
                </Button>
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

      <ModifyProductModal
        show={showModifyProductModal}
        handleClose={handleCloseModifyProductModal}
        product={selectedProduct}
      />

      <DeleteProductModal
        show={showDeleteProductModal}
        handleClose={handleCloseDeleteProductModal}
        productId={selectedProductId}
      />
    </>
  );
};

export default AdminDashboard;
