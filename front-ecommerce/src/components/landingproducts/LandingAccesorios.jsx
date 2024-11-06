import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Pagination } from 'react-bootstrap';
import Navbar from '../navbar/NavBar';
import axios from 'axios';
import '../landingproducts/LandingProducts.css';

const LandingAccesorios = () => {
  const [productsAccesorios, setProductsAccesorios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await axios.get('https://localhost:7037/api/Product', {
          params: {
            filters: 'idCategory:3:1',
            SortBy: 'id',
            IsDescending: true,
            Page: currentPage,
            PageSize: 4,
          }
        });

        if (response.data && response.data.data) {
          setProductsAccesorios(response.data.data); // Ajusta esto según la estructura de tu respuesta
          const pageCount = response.data.pageCount || 1; // Asegúrate de obtener el pageCount
          setTotalPages(pageCount); // Ajusta esto según la estructura de tu respuesta
        } else {
          setProductsAccesorios([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProductsAccesorios([]);
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
          <h1 id="landingTitle" className="d-flex justify-content-center mt-5 mb-5">
            Accesorios
          </h1>
        </Container>
      </div>

      <div className="d-flex justify-content-center mt-4 gap-3">
        {Array.isArray(productsAccesorios) && productsAccesorios.map((product, index) => (
          <Card key={index} className="hover-card" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title style={{ color: "yellow" }}>{product.name}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Button variant="dark">Comprar</Button>
            </Card.Body>
          </Card>
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

      <span id="CDS"></span> {/* Identificador para la sección de contacto */}
    </>
  );
};

export default LandingAccesorios;
