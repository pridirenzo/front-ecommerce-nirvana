import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/NavBar";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const SalesDashboard = ({ orders, products, users }) => {

  // Función para obtener el nombre del cliente por ID
  const getCustomerName = (id) => {
    const user = users.find(user => user.id === id);
    return user ? `${user.firstName} ${user.lastName}` : 'Desconocido';
  };

  // Función para obtener el nombre del producto por ID
  const getProductName = (id) => {
    const product = products.find(product => product.id === id);
    return product ? product.name : 'Desconocido';
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 id="salesDashTitle" className="text-center mb-4 mt-4" style={{ fontSize: "30px" }}>
          Administrar Ventas 🛒
        </h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID del Pedido</th>
              <th>Nombre del Cliente</th>
              <th>Nombre de la Calle</th>
              <th>Número de la Calle</th>
              <th>Provincia</th>
              <th>Localidad</th>
              <th>Productos</th>
              <th>Tamaño</th>
              <th>Color</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {orders && orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{getCustomerName(order.idUser)}</td>
                  <td>{order.address.streetName}</td>
                  <td>{order.address.streetNumber}</td>
                  <td>{order.address.province}</td>
                  <td>{order.address.locality}</td>
                  <td>
                    {order.orderLines.map((line, index) => (
                      <div key={index}>{getProductName(line.productVariant.idProduct)}</div>
                    ))}
                  </td>
                  <td>
                    {order.orderLines.map((line, index) => (
                      <div key={index}>{line.productVariant.size}</div>
                    ))}
                  </td>
                  <td>
                    {order.orderLines.map((line, index) => (
                      <div key={index}>{line.productVariant.color}</div>
                    ))}
                  </td>
                  <td>
                    {order.orderLines.map((line, index) => (
                      <div key={index}>{line.amount}</div>
                    ))}
                  </td>
                  <td>
                    {order.orderLines.map((line, index) => (
                      <div key={index}>${line.price}</div>
                    ))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center">
                  No hay órdenes disponibles
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

SalesDashboard.propTypes = {
  orders: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export default SalesDashboard;
