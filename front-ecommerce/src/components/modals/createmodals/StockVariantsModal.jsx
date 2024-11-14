import '../modalstyle/Modals.css';
import React, { useState } from "react";
import { Modal, Form, Button, FormGroup } from "react-bootstrap";

function StockVariantsModal({ show, handleClose, onSave, isClothingCategory }) {
  const [variants, setVariants] = useState([{ id: 0, size: "", stock: "" }]);

  const handleAddVariant = () => {
    if (variants.length < 4) {
      setVariants([...variants, { id: variants.length, size: "", stock: "" }]);
    }
  };

  const handleRemoveVariant = () => {
    setVariants(variants.slice(0, -1));
  };

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = variants.map((variant, i) =>
      i === index ? { ...variant, [field]: field === "stock" ? Math.max(0, Number(value)) : value } : variant
    );
    setVariants(updatedVariants);
  };

  const handleSave = () => {
    // Verificar que el stock es positivo y que no hay talles duplicados
    const isValidStock = variants.every(variant => variant.stock > 0);
    const uniqueSizes = new Set(variants.map(variant => variant.size));
    const isUniqueSize = uniqueSizes.size === variants.length;
  
    if (!isValidStock) {
      alert("Por favor, ingresa un stock positivo para cada variante.");
      return;
    }
  
    if (!isUniqueSize) {
      alert("Cada talle debe ser único. Por favor, selecciona talles diferentes.");
      return;
    }
  
    onSave(variants);
    handleClose();
  };
  

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className='modal-title-custom'>Agregar stock</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {variants.map((variant, index) => (
          <div key={variant.id} className="mb-3">
            {isClothingCategory && (
              <FormGroup className="mb-3">
                <Form.Label className="form-title-custom">Talles</Form.Label>
                <Form.Select
                  value={variant.size}
                  onChange={(e) => handleVariantChange(index, "size", e.target.value)}
                >
                  <option value="" disabled className="form-select-options-custom">Seleccione un tamaño</option>
                  <option value="S" className="form-select-options-custom">S</option>
                  <option value="M" className="form-select-options-custom">M</option>
                  <option value="L" className="form-select-options-custom">L</option>
                  <option value="XL" className="form-select-options-custom">XL</option>
                </Form.Select>
              </FormGroup>
            )}
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">Stock</Form.Label>
              <Form.Control
                placeholder="Cantidad en stock"
                value={variant.stock}
                required
                type='number'
                onChange={(e) => handleVariantChange(index, "stock", e.target.value)}
                min="1"
              />
            </Form.Group>
          </div>
        ))}
        {isClothingCategory && (
          <Form.Group>
            <Button variant="primary" onClick={handleAddVariant} disabled={variants.length >= 4}>
              Agregar nuevo talle
            </Button>
            <Button variant="secondary" className="ml-3" onClick={handleRemoveVariant} disabled={variants.length === 1}>
              Sacar
            </Button>
          </Form.Group>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar stock de talles
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StockVariantsModal;
