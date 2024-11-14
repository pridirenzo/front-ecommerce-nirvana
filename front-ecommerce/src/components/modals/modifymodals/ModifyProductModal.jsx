import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { UpdateProduct } from '../../api/apiService'; // Asegúrate de ajustar la ruta de importación
import '../modalstyle/Modals.css';

const ModifyProductModal = ({ show, handleClose, product }) => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [isUpdating, setIsUpdating] = useState(false); 

  useEffect(() => {
    if (product) {
      setCategory(product.idCategory || '');
      setProductName(product.name || '');
      setDescription(product.description || '');
      setImageUrl(product.imageUrl || '');
      setPrice(product.price && product.price.value ? product.price.value.toString() : ''); // Conviértelo a cadena de texto
    }
  }, [product]);

  const handleSave = async () => {
    // Validar que todos los campos estén completos
    if (!category || !productName || !description || !imageUrl || !price) {
      alert("Por favor, completa todos los campos antes de guardar.");
      return;
    }
  
    const priceValue = parseFloat(price);
  
    // Validar que el precio sea positivo
    if (priceValue <= 0) {
      alert("Por favor, ingresa un precio positivo.");
      return;
    }
  
    const updatedProduct = {
      idCategory: category,
      name: productName,
      description: description,
      imageUrl: imageUrl,
      price: {
        createdAt: new Date().toISOString(),
        value: priceValue
      },
      id: product.id
    };
  
    try {
      setIsUpdating(true);
      const response = await UpdateProduct(updatedProduct);
      console.log('Producto actualizado:', response);
      setIsUpdating(false);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };
  
  

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className='modal-title-custom'>Modificar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className='form-title-custom'>Categorías</Form.Label>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" className='form-select-options-custom' disabled>Elija una categoría</option>
                <option value="3" className='form-select-options-custom'>Accesorios</option>
                <option value="4" className='form-select-options-custom'>Remeras</option>
                <option value="5" className='form-select-options-custom'>Buzos</option>
                <option value="6" className='form-select-options-custom'>Vinilos</option>
                <option value="7" className='form-select-options-custom'>CDs</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='form-title-custom'>Nombre de producto</Form.Label>
              <Form.Control
                placeholder="Nombre"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='form-title-custom'>Descripción del producto</Form.Label>
              <Form.Control as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='form-title-custom'>Link de la imagen del producto</Form.Label>
              <Form.Control
                placeholder="Ej: https://imagen.com/"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Label className='form-title-custom'>Precio</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button onClick={handleSave} className='mr-3' disabled={isUpdating}>Guardar cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModifyProductModal;
