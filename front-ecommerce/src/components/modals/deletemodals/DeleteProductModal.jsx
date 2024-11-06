import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../modalstyle/Modals.css';
import { DeleteProduct } from '../../api/apiService'; // Asegúrate de ajustar la ruta de importación

const DeleteProductModal = ({ show, handleClose, productId }) => {

  const handleDelete = async () => {
    if (productId) {
      try {
        const response = await DeleteProduct(productId);
        console.log('Producto eliminado:', response);
        handleClose();
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    } else {
      console.error('No se ha proporcionado un ID de producto válido.');
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title-custom'>Eliminar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className='form-title-custom'>¿Estás seguro de eliminar este producto?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default DeleteProductModal;
