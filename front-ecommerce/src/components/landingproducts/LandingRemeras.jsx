import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Pagination } from 'react-bootstrap';
import Navbar from '../navbar/NavBar';
import axios from 'axios';
import '../landingproducts/LandingProducts.css';
import CardProduct from '../../cardProduct/CardProduct';
import PropTypes from "prop-types";


const LandingRemeras = ({ products }) => {
  const [productsRemeras, setProductsRemeras] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await axios.get('https://localhost:7037/api/Product', {
          params: {
            filters: 'idCategory:4:1',
            SortBy: 'id',
            IsDescending: true,
            Page: currentPage,
            PageSize: 4,
          }
        });

        if (response.data && response.data.data) {
          setProductsRemeras(response.data.data); // Ajusta esto según la estructura de tu respuesta
          const pageCount = response.data.pageCount || 1; // Asegúrate de obtener el pageCount
          setTotalPages(pageCount); // Ajusta esto según la estructura de tu respuesta
        } else {
          setProductsRemeras([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProductsRemeras([]);
      }
    };

    fetchProducts();
  }, [currentPage]);

  console.log(productsRemeras);


  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />

      <div className="animated-text d-flex justify-content-center">
        <Container className="text-center mt-5">
          <h1 id="landingTitle" className="d-flex justify-content-center mt-5 mb-5">
            Remeras
          </h1>
        </Container>
      </div>

      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsRemeras) && productsRemeras.map((product) => (
          <CardProduct key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5 mb-5">
        <Pagination>
          {[...Array(totalPages > 0 ? totalPages : 1).keys()].map(number => (
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

      <span id="REMERAS"></span> {/* Identificador para la sección de contacto */}
    </>
  );
};



LandingRemeras.propTypes = {
  products: PropTypes.object.isRequired
};


export default LandingRemeras;