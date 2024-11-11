import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const AdminCardProduct = ({ product, handleOpenModifyProductModal, handleOpenDeleteProductModal }) => {
  const navigate = useNavigate();

  return (
    <Card className="hover-card" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title style={{ color: "#FFE603" }}>{product.name}</Card.Title>
        <Card.Text style={{ color: "#FFE603" }}>${product.price}</Card.Text>
        <Button
          variant="primary"
          className="m-2"
          onClick={() => handleOpenModifyProductModal(product)}
        >
          Modificar
        </Button>
        <Button
          variant="danger"
          onClick={() => handleOpenDeleteProductModal(product.id)}
        >
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};

AdminCardProduct.propTypes = {
  product: PropTypes.object.isRequired,
  handleOpenModifyProductModal: PropTypes.func.isRequired,
  handleOpenDeleteProductModal: PropTypes.func.isRequired,
};

export default AdminCardProduct;
