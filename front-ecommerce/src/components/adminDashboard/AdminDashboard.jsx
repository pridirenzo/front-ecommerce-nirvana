import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import { useState } from "react";
import CreateProductModal from "../modals/createmodals/CreateProductModal";
import ModifyProductModal from "../modals/modifymodals/ModifyProductModal";
import DeleteProductModal from "../modals/deletemodals/DeleteProductModal";
import AdminCardProduct from "../cardProduct/AdminCardProduct";

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
  };

  const handleCloseModifyProductModal = () => {
    setShowModifyProductModal(false);
    setSelectedProduct(null);
  };

  const handleCloseDeleteProductModal = () => {
    setShowDeleteProductModal(false);
    setSelectedProductId(null);
  };

  const handleNavClick = (link) => {
    window.location.href = link;
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
      <h3 className="d-flex justify-content-center">Prendas 🏷️</h3>{" "}
      <div className="d-flex justify-content-center mt-4 gap-3">

        {Array.isArray(productsprendas) &&
          productsprendas.map((product, index) => (
            <AdminCardProduct
              key={index}
              product={product}
              handleOpenModifyProductModal={handleOpenModifyProductModal}
              handleOpenDeleteProductModal={handleOpenDeleteProductModal}
            />
          ))}
      </div>
      <div className="d-flex justify-content-center mt-5">

        <Button variant="dark" className="m-2 mb-5" onClick={() => handleNavClick("/admintees")}>
          Ver todo en REMERAS
        </Button>
        <Button variant="dark" className="m-2 mb-5" onClick={() => handleNavClick("/adminsweatshirts")}>
          Ver todo en BUZOS
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">
        
        Discografía 💿
      </h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
       
        {Array.isArray(productsmusic) &&
          productsmusic.map((product) => (
            <AdminCardProduct
              key={product.id}
              product={product}
              handleOpenModifyProductModal={handleOpenModifyProductModal}
              handleOpenDeleteProductModal={handleOpenDeleteProductModal}
            />
          ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        
        <Button variant="dark" className="m-2 mb-5" onClick={() => handleNavClick("/adminvinyls")}>
          Ver todo en VINILOS
        </Button>
        <Button variant="dark" className="m-2 mb-5" onClick={() => handleNavClick("/admincds")}>
          Ver todo en CDs
        </Button>
      </div>
      <h3 className="d-flex justify-content-center mt-5 mb-5">
        Accesorios 🎩
      </h3>
      <div className="d-flex justify-content-center mt-4 gap-3">
        
        {Array.isArray(productsaccesories) &&
          productsaccesories.map((product, index) => (
            <AdminCardProduct
              key={index}
              product={product}
              handleOpenModifyProductModal={handleOpenModifyProductModal}
              handleOpenDeleteProductModal={handleOpenDeleteProductModal}
            />
          ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        
        <Button variant="dark" className="mt-2 mb-5" onClick={() => handleNavClick("/adminaccessories")}>
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
