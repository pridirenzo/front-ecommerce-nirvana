import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../modals/modalstyle/Modals.css'

const OrderSuccessfulModal = ({ show, handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title-custom'>¡Compra exitosa! </Modal.Title>
        </Modal.Header>
        <Modal.Body className='form-title-custom'>La compra fue completada de manera exitosa. Nos estaremos comunicando vía mail para coordinar el envío. Gracias!</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default OrderSuccessfulModal;
