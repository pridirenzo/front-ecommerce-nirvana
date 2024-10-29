import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import '../modalstyle/Modals.css';
import { CreateProducts } from '../../api/apiService';
import StockVariantsModal from '../createmodals/StockVariantsModal'

const CreateProductModal = ({ show, handleClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [productVariants, setProductVariants] = useState([]);
  const [ShowStockVariantsModal, setShowStockVariantsModal] = useState(false);


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  const handleOpenStockVariantsModal = () => setShowStockVariantsModal(true);
  const handleCloseModal = () => setShowStockVariantsModal(false);

  // Recibe las variantes del modal hijo
  const handleSaveVariants = (variants) => {
    setProductVariants(variants);
  };

  const handleSubmit = async () => {
    const productData = {
      idCategory: category,
      name: productName,
      description,
      imageUrl,
      price: {
        createdAt: new Date().toISOString(),
        value: parseFloat(price)
      },
      productVariants: productVariants.map(variant => ({
        stock: parseInt(variant.stock, 10),
        size: variant.size,
        color: variant.color,
      })),
    };
    
    console.log('Enviando datos del producto:', productData);
    
    try {
      const response = await CreateProducts(productData);
      console.log('Producto creado:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title-custom'>Añadir un nuevo producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className='form-title-custom'>Categorías</Form.Label>
              <Form.Select value={category} onChange={handleCategoryChange}>
                <option value="" className='form-select-options-custom'>Elija una categoría</option>
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
                onChange={(e) => setPrice(e.target.value)} />
            </InputGroup>
            <Button onClick={handleOpenStockVariantsModal}> Agregar Stock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <StockVariantsModal
        show={ShowStockVariantsModal}
        handleClose={handleCloseModal}
        onSave={handleSaveVariants}
      />
    </>
  );
};

export default CreateProductModal;
