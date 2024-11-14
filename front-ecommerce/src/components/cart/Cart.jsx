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
    navigate("/purchase", { state: { cartItems } } );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );



  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4" style={{minHeight: "64vh"}}>
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
                    <Card.Text style={{ color: "#000000" }}>{item.description}</Card.Text>
                    { (item.idCategory === 4 || item.idCategory === 5) && (
                    <Card.Text style={{ color: "#FFE603" }}>
                      <strong style={{ color: "#000000" }}> - Tamaño:</strong> {item.size || "N/A"}
                    </Card.Text>
                    )}
                    <Card.Text style={{ color: "#FFE603" }}>
                      <strong style={{ color: "#000000" }}> - Cantidad:</strong> {item.quantity}
                    </Card.Text >
                    <Card.Text  style={{ color: "#FFE603" }}>
                      <strong style={{ color: "#000000" }}> - Precio unitario:</strong> ${item.price}
                    </Card.Text>
                    <Card.Text style={{ color: "#FFE603" }}>
                      Total: ${item.price * item.quantity}
                    </Card.Text>
                    <Button
                      className="mt-2"
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
              <h3 style={{ color: "#FFE603", fontSize: 20, margin: 8 }}>
                <div className="text-white inline ">Total a pagar:</div> ${totalPrice.toFixed(2)}
              </h3>
              <Button
                variant="dark"
                className="mt-4 mr-3"
                onClick={handleContinueShopping}
              >
                Seguir comprando
              </Button>
              <Button
                variant="warning"
                className="mt-4"
                onClick={handleAddDeliveryDetails}
              >
                Finalizar compra
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