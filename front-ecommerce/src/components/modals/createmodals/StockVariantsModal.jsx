import React, { useState } from "react";
import { Modal, Form, Button, FormGroup } from "react-bootstrap";

function StockVariantsModal({ show, handleClose, onSave }) {
  const [variants, setVariants] = useState([{ id: 0, size: "", stock: "", color: "" }]); // Estado inicial con un objeto

  const handleAddVariant = () => {
    if (variants.length < 3) {
      setVariants([...variants, { id: variants.length, size: "", stock: "", color: "" }]);
    }
  };

  const handleRemoveVariant = () => {
    setVariants(variants.slice(0, -1));
  };

  const handleVariantChange = (index, field, value) => {
    const updatedVariants = variants.map((variant, i) =>
      i === index ? { ...variant, [field]: value } : variant
    );
    setVariants(updatedVariants);
  };

  const handleSave = () => {
    onSave(variants);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar stock</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Campo de Color inicial */}
        <Form.Group className="mb-3">
          <Form.Label className="form-title-custom">Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el color"
            value={variants[0].color} // Usamos el valor del primer elemento de variants
            onChange={(e) => handleVariantChange(0, "color", e.target.value)}
          />
        </Form.Group>

        {/* Campo de Talle inicial */}
        <FormGroup className="mb-3">
          <Form.Label className="form-title-custom">Talles</Form.Label>
          <Form.Select
            value={variants[0].size}
            onChange={(e) => handleVariantChange(0, "size", e.target.value)}
          >
            <option value="" className="form-select-options-custom">
              Seleccione un tamaño
            </option>
            <option value="S" className="form-select-options-custom">S</option>
            <option value="M" className="form-select-options-custom">M</option>
            <option value="L" className="form-select-options-custom">L</option>
            <option value="XL" className="form-select-options-custom">XL</option>
          </Form.Select>
        </FormGroup>

        {/* Campo de Stock inicial */}
        <Form.Group className="mb-3">
          <Form.Label className="form-title-custom">Stock</Form.Label>
          <Form.Control
            placeholder="Cantidad en stock"
            value={variants[0].stock}
            onChange={(e) => handleVariantChange(0, "stock", e.target.value)}
          />
        </Form.Group>

        {variants.map((variant, index) => index !== 0 && (
          <div key={variant.id} className="mb-3">
            {/* Campos de variante adicionales */}
            <FormGroup className="mb-3">
              <Form.Label className="form-title-custom">Talles</Form.Label>
              <Form.Select
                value={variant.size}
                onChange={(e) => handleVariantChange(index, "size", e.target.value)}
              >
                <option value="" className="form-select-options-custom">
                  Seleccione un tamaño
                </option>
                <option value="S" className="form-select-options-custom">S</option>
                <option value="M" className="form-select-options-custom">M</option>
                <option value="L" className="form-select-options-custom">L</option>
                <option value="XL" className="form-select-options-custom">XL</option>
              </Form.Select>
            </FormGroup>
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">Stock</Form.Label>
              <Form.Control
                placeholder="Cantidad en stock"
                value={variant.stock}
                onChange={(e) => handleVariantChange(index, "stock", e.target.value)}
              />
            </Form.Group>
          </div>
        ))}

        <Form.Group>
          <Button variant="primary" onClick={handleAddVariant} disabled={variants.length >= 4}>
            Agregar
          </Button>
          <Button variant="secondary" className="ml-3" onClick={handleRemoveVariant} disabled={variants.length === 1}>
            Sacar
          </Button>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StockVariantsModal;