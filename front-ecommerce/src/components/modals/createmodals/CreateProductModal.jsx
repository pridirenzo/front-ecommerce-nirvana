import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import "../modalstyle/Modals.css";
import { CreateProducts } from "../../api/apiService";
import StockVariantsModal from "../createmodals/StockVariantsModal";

const CreateProductModal = ({ show, handleClose }) => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [productVariants, setProductVariants] = useState([]);
  const [color, setColor] = useState("");
  const [showStockVariantsModal, setShowStockVariantsModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [isUpdating, setIsUpdating] = useState(false); 
 

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    if (errors.category) {
      setErrors({ ...errors, category: "" });
    }
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    if (errors.color) {
      setErrors({ ...errors, color: "" });
    }
  };

  const handleOpenStockVariantsModal = () => {
    setShowStockVariantsModal(true);
  };

  const handleCloseModal = () => {
    setShowStockVariantsModal(false);
  };

  const handleSaveVariants = (variants) => {
    setProductVariants(
      variants.map((variant) => ({
        ...variant,
        color: color,
      }))
    );
  };

  const validateForm = () => {
    const newErrors = {};
    if (!category) {
      newErrors.category = "La categoría es obligatoria.";
    }
    if (!productName.trim()) {
      newErrors.productName = "El nombre del producto es obligatorio.";
    }
    if (!description.trim()) {
      newErrors.description = "La descripción es obligatoria.";
    }
    if (!imageUrl.trim()) {
      newErrors.imageUrl = "El link de la imagen es obligatorio.";
    }
    if (!price.trim() || isNaN(price) || parseFloat(price) <= 0) {
      newErrors.price = "El precio debe ser un número positivo.";
    }
    if (isClothingCategory && !color.trim()) {
      newErrors.color = "El color es obligatorio para esta categoría.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const productData = {
      idCategory: category,
      name: productName,
      description,
      imageUrl,
      price: {
        createdAt: new Date().toISOString(),
        value: parseFloat(price),
      },
      productVariants: productVariants.map((variant) => ({
        stock: parseInt(variant.stock, 10),
        size: variant.size,
        color: variant.color,
      })),
    };

    try {
      setIsUpdating(true);
      const response = await CreateProducts(productData);
      console.log("Producto creado:", response.data);
      setIsUpdating(false);
      handleClose();
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  const isClothingCategory = category === "4" || category === "5";

  return (
    <>
      <Modal
        show={show && !showStockVariantsModal}
        onHide={handleClose}
        backdrop="static"
        backdropClassName="modal-backdrop"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title-custom">
            Añadir un nuevo producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">Categorías</Form.Label>
              <Form.Select
                value={category}
                onChange={handleCategoryChange}
                isInvalid={!!errors.category}
              >
                <option value="" className="form-select-options-custom" disabled>
                  Elija una categoría
                </option>
                <option value="3" className="form-select-options-custom">
                  Accesorios
                </option>
                <option value="4" className="form-select-options-custom">
                  Remeras
                </option>
                <option value="5" className="form-select-options-custom">
                  Buzos
                </option>
                <option value="6" className="form-select-options-custom">
                  Vinilos
                </option>
                <option value="7" className="form-select-options-custom">
                  CDs
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">Nombre de producto</Form.Label>
              <Form.Control
                placeholder="Nombre"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                isInvalid={!!errors.productName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.productName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isInvalid={!!errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">
                Link de la imagen
              </Form.Label>
              <Form.Control
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                isInvalid={!!errors.imageUrl}
              />
              <Form.Control.Feedback type="invalid">
                {errors.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>
            {isClothingCategory && (
              <Form.Group className="mb-3">
                <Form.Label className="form-title-custom">Color</Form.Label>
                <Form.Control
                  value={color}
                  onChange={handleColorChange}
                  isInvalid={!!errors.color}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.color}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label className="form-title-custom">Precio</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button onClick={handleOpenStockVariantsModal}>
              Agregar stock
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={isUpdating}>
            Guardar nuevo producto
          </Button>
        </Modal.Footer>
      </Modal>
      <StockVariantsModal
        show={showStockVariantsModal}
        handleClose={handleCloseModal}
        onSave={handleSaveVariants}
        isClothingCategory={isClothingCategory}
      />
    </>
  );
};

export default CreateProductModal;