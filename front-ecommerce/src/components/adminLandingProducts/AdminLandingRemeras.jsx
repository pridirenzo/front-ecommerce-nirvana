import React, { useState, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
import Navbar from "../navbar/NavBar";
import axios from "axios";
import "../landingproducts/LandingProducts.css";
import AdminCardProduct from "../cardProduct/AdminCardProduct";
import ModifyProductModal from "../modals/modifymodals/ModifyProductModal";
import DeleteProductModal from "../modals/deletemodals/DeleteProductModal";

const AdminLandingRemeras = ({ }) => {
  const [productsRemeras, setProductsRemeras] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModifyProductModal, setShowModifyProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

    const handleOpenModifyProductModal = (product) => {
    setSelectedProduct(product);
    setShowModifyProductModal(true);
  };

  const handleOpenDeleteProductModal = (productId) => {
    setSelectedProductId(productId);
    setShowDeleteProductModal(true);
  };

  const handleCloseModifyProductModal = () => {
    setShowModifyProductModal(false);
    setSelectedProduct(null);
  };

  const handleCloseDeleteProductModal = () => {
    setShowDeleteProductModal(false);
    setSelectedProductId(null);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:7037/api/Product", {
          params: {
            filters: "idCategory:4:1",
            SortBy: "id",
            IsDescending: true,
            Page: currentPage,
            PageSize: 4,
          },
        });

        if (response.data && response.data.data) {
          setProductsRemeras(response.data.data); // Ajusta esto según la estructura de tu respuesta
          const pageCount = response.data.pageCount || 1; // Asegúrate de obtener el pageCount
          setTotalPages(pageCount); // Ajusta esto según la estructura de tu respuesta
        } else {
          setProductsRemeras([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProductsRemeras([]);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      <Navbar />
      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1
            id="landingTitle"
            className="d-flex justify-content-center mt-5 mb-5"
          >
            Remeras
          </h1>
        </Container>
      </div>
      <div className="d-flex justify-content-center mt-4 gap-3">
      {Array.isArray(productsRemeras) &&
          productsRemeras.map((product) => (
            <AdminCardProduct
              key={product.id}
              product={product}
              handleOpenModifyProductModal={handleOpenModifyProductModal}
              handleOpenDeleteProductModal={handleOpenDeleteProductModal}
            />
          ))}
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Pagination>
          {[...Array(totalPages > 0 ? totalPages : 1).keys()].map((number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <span id="REMERAS"></span>{" "}
      {/* Identificador para la sección de contacto */}

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

export default AdminLandingRemeras;
