import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import '../modalstyle/Modals.css';
import { CreateProducts } from '../../api/apiService';

const CreateProductModal = ({ show, handleClose }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [stock, setStock] = useState('');
  const [showSizeColorFields, setShowSizeColorFields] = useState(false);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === '4' || selectedCategory === '5') {
      setShowSizeColorFields(true);
    } else {
      setShowSizeColorFields(false);
      setSize('');
      setColor('');
    }
  };

  const handleSubmit = async () => {
    const productData = {
      idCategory: category,
      name: productName,
      description,
      imageUrl,
      price: {
        createdAt: new Date().toISOString(), // Asegúrate de que la fecha sea en formato ISO
        value: parseFloat(price)
      },
      productVariants: [
        {
          stock: parseInt(stock, 10),
          size: showSizeColorFields ? size : null,
          color: showSizeColorFields ? color : null,
        }
      ]
    };
    
    console.log('Enviando datos del producto:', productData); // Verifica los datos que se están enviando
    
    try {
      const response = await CreateProducts(productData); // Usa la función de creación
      console.log('Producto creado:', response.data);
      handleClose(); // Cierra el modal después de crear el producto
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
            {showSizeColorFields && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label className='form-title-custom'>Tamaño</Form.Label>
                  <Form.Select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="" className='form-select-options-custom'>Seleccione un tamaño</option>
                    <option value="S" className='form-select-options-custom'>S</option>
                    <option value="M" className='form-select-options-custom'>M</option>
                    <option value="L" className='form-select-options-custom'>L</option>
                    <option value="XL" className='form-select-options-custom'>XL</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className='form-title-custom'>Color</Form.Label>
                  <Form.Control type="text"
                    placeholder="Ingrese el color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </Form.Group>
              </>
            )}
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
            <Form.Group className="mb-3">
              <Form.Label className='form-title-custom'>Stock</Form.Label>
              <Form.Control 
                placeholder="Cantidad en stock" 
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
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
    </>
  );
};

export default CreateProductModal;
