import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Navbar from "../navbar/NavBar";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      setCartItems(cartItems.filter((item, i) => i !== index));
    }
  };

  const handleContinueShopping = () => {
    navigate("/"); 
  };

  const handleAddDeliveryDetails = () => {
    navigate("/purchase");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="hover:text-primary text-white text-2xl font-bold mb-4">
          Carrito de Compras
        </h2>
        {cartItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cartItems.map((item, index) => (
                <Card
                  key={index}
                  className="hover-card"
                  style={{ width: "20rem" }}
                >
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title style={{ color: "#FFE603" }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>
                      <strong>Tamaño:</strong> {item.size || "N/A"}
                    </Card.Text>
                    <Card.Text>
                      <strong>Cantidad:</strong> {item.quantity}
                    </Card.Text>
                    <Card.Text className="font-bold">
                      <strong>Precio unitario:</strong> ${item.price}
                    </Card.Text>
                    <Card.Text className="font-bold">
                      <strong>Total:</strong> ${item.price * item.quantity}
                    </Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => handleRemoveItem(index)}
                    >
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-white">
                Total a pagar: ${totalPrice.toFixed(2)}
              </h3>
              <Button
                variant="dark"
                className="mt-4"
                onClick={handleContinueShopping}
              >
                Seguir comprando
              </Button>
              <Button
                variant="dark"
                className="mt-4 ml-3"
                onClick={handleAddDeliveryDetails}
              >
                Añadir detalles de entrega
              </Button>
            </div>
          </>
        ) : (
          <div>
            <p className="text-white text-lg font-semibold mt-2">
              Tu carrito está vacío.
            </p>
            <Button
              variant="dark"
              className="mt-4"
              onClick={handleContinueShopping}
            >
              Añadir productos
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
