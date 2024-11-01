// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/NavBar";
import PropTypes from "prop-types";
// import { Table, Modal, Button } from "react-bootstrap";

const SalesDashboard = ({ orders }) => {
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showCloseModal, setShowCloseModal] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [newStatus, setNewStatus] = useState("");

//   const handleCloseEdit = () => setShowEditModal(false);
//   const handleCloseClose = () => setShowCloseModal(false);

//   const handleShowEdit = (order) => {
//     setSelectedOrder(order);
//     setShowEditModal(true);
//     setNewStatus(order.status);
//   };

//   const handleShowClose = (order) => {
//     setSelectedOrder(order);
//     setShowCloseModal(true);
//   };

//   const handleUpdateOrder = () => {
//     // Aquí puedes agregar la lógica para actualizar el estado del pedido
//     console.log("Actualizar pedido:", { ...selectedOrder, status: newStatus });
//     handleCloseEdit();
//   };

//   const handleCloseOrder = () => {
//     // Aquí puedes agregar la lógica para cerrar el pedido
//     console.log("Cerrar pedido:", selectedOrder);
//     handleCloseClose();
//   };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 id="salesDashTitle" className="text-center mb-4 mt-4" style={{ fontSize: "30px" }}>
          Administrar Ventas 🛒
        </h1>

        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID del Pedido</th>
              <th>Nombre del Cliente</th>
              <th>Fecha del Pedido</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Administrar</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-dark btn-sm me-2" onClick={() => handleShowEdit(order)}>
                    Cambiar Estado
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleShowClose(order)}>
                    Cerrar Pedido
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Modal para Cambiar Estado del Pedido */}
        {/* <Modal show={showEditModal} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Cambiar Estado del Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedOrder && (
              <form>
                <div className="form-group">
                  <label style={{ color: "black" }}>Estado</label>
                  <select
                    className="form-control"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Enviado">Enviado</option>
                    <option value="Cerrado">Cerrado</option>
                  </select>
                </div>
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseEdit}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleUpdateOrder}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal> */}

        {/* Modal para Cerrar Pedido */}
        {/* <Modal show={showCloseModal} onHide={handleCloseClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Cerrar Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>
            ¿Estás seguro de que deseas cerrar el pedido #{selectedOrder ? selectedOrder.id : ''}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleCloseOrder}>
              Cerrar Pedido
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </>
  );
};

SalesDashboard.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customerName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SalesDashboard;
