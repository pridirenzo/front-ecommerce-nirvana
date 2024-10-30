import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SuperAdminNavbar from "../superAdminNavbar/SuperAdminNavbar";
import PropTypes from "prop-types";
import { Table, Modal, Button } from "react-bootstrap";

const SuperAdminDashboard = ({ users }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ firstName: "", email: "", password: "", role: 3 }); // Default role is "Cliente"

  const handleCloseEdit = () => setShowEditModal(false);
  const handleCloseDelete = () => setShowDeleteModal(false);
  const handleCloseAdd = () => setShowAddModal(false);

  const handleShowEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleShowDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleShowAdd = () => {
    setNewUser({ firstName: "", email: "", password: "", role: 3 }); // Reiniciar campos
    setShowAddModal(true);
  };

  const getRoleName = (role) => {
    switch (role) {
      case 1:
        return "Super Admin";
      case 2:
        return "Admin";
      case 3:
        return "Cliente";
      default:
        return "Desconocido";
    }
  };

  const handleAddUser = () => {
    // Aquí puedes agregar la lógica para guardar el nuevo usuario
    console.log("Nuevo usuario:", newUser);
    handleCloseAdd();
  };

  return (
    <>
      <SuperAdminNavbar />
      <div className="container">
        <h1 id="superadminDashTitle" className="text-center mb-4 mt-4" style={{ fontSize: "30px" }}>
          Administrar Usuarios 👥
        </h1>

        <div className="d-flex justify-content-center mb-4">
          <Button variant="dark" className="add-button w-50" onClick={handleShowAdd}>
            Agregar usuario ++
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Administrar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.email}</td>
                <td>{getRoleName(user.role)}</td>
                <td>
                  <button className="btn btn-dark btn-sm me-2" onClick={() => handleShowEdit(user)}>Editar</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleShowDelete(user)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Modal para Agregar Usuario */}
        <Modal show={showAddModal} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "black"}}>Agregar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label style={{color: "black"}}>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={newUser.firstName}
                  onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{color: "black"}}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{color: "black"}}>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{color: "black"}}>Rol</label>
                <select style={{color: "black"}}
                  className="form-control"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: parseInt(e.target.value) })}
                >
                  <option style={{color: "black"}} value={1}>Super Admin</option>
                  <option style={{color: "black"}} value={2}>Admin</option>
                  <option style={{color: "black"}} value={3}>Cliente</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseAdd}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleAddUser}>
              Agregar Usuario
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para Editar Usuario */}
        <Modal show={showEditModal} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "black"}}>Editar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedUser && (
              <form>
                <div className="form-group">
                  <label style={{color: "black"}} >Nombre</label>
                  <input type="text" className="form-control" defaultValue={selectedUser.firstName} />
                </div>
                <div className="form-group">
                  <label style={{color: "black"}}>Email</label>
                  <input type="email" className="form-control" defaultValue={selectedUser.email} />
                </div>
                {/* Puedes agregar más campos según sea necesario */}
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseEdit}>
              Cancelar
            </Button>
            <Button variant="success" onClick={() => {
              // Lógica para guardar cambios
              handleCloseEdit();
            }}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para Eliminar Usuario */}
        <Modal show={showDeleteModal} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title style={{color: "black"}}>Eliminar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{color: "black"}}>
            ¿Estás seguro de que deseas eliminar a {selectedUser ? selectedUser.firstName : ''}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseDelete}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={() => {
              // Lógica para eliminar el usuario
              handleCloseDelete();
            }}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

SuperAdminDashboard.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SuperAdminDashboard;
