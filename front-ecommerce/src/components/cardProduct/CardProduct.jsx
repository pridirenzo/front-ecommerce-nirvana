import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Carousel, Container } from "react-bootstrap";
//import ProtectedBuy from '../../routes/ProtectedBuy';


const CardProduct = ({ product, handleAddToCart }) => {
  const navigate = useNavigate();

  const handdlePurchase = () => {
    navigate(`/product/${product.id}`, {
      state: {
        product,
      },
    });
  };


  return (
    <Card className="hover-card" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title style={{ color: "#FFE603" }}>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {/*<ProtectedBuy onBuy={() => handleAddToCart(product)}>
                    <Button variant="dark">
                        Comprar
                    </Button>
                </ProtectedBuy>*/}
        <Button variant="dark" onClick={() => handdlePurchase()}>
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
};

CardProduct.propTypes = {
  products: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default CardProduct;
