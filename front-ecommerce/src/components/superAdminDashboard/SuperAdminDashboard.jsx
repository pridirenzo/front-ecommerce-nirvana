import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/NavBar";
import PropTypes from "prop-types";
import { Table, Modal, Button, Alert } from "react-bootstrap";

const SuperAdminDashboard = ({ users, setUsers }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ firstName: "", email: "", password: "", role: 3 });
  const [successMessage, setSuccessMessage] = useState("");

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
    setNewUser({ firstName: "", email: "", password: "", role: 3 });
    setShowAddModal(true);
  };

  const getRoleName = (role) => {
    switch (role) {
      case 1: return "Super Admin";
      case 2: return "Admin";
      case 3: return "Cliente";
      default: return "Desconocido";
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await fetch(`https://localhost:7037/api/User/create-and-verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const addedUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, addedUser]); 
        handleCloseAdd();
        setSuccessMessage("Usuario agregado exitosamente.");
      } else {
        console.error('Error al agregar el usuario:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleEditUser = async () => {
    if (!selectedUser) return; 
  
    // Asegúrate de incluir todos los campos necesarios
    const updatedUser = {
      id: selectedUser.id,  // Asegúrate de incluir el ID
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName || "",  // Asegúrate de incluir lastName
      email: selectedUser.email,
      password: selectedUser.password || "",  // Incluye password si es necesario
      role: selectedUser.role,
      isActive: selectedUser.isActive !== undefined ? selectedUser.isActive : 1,  // Asigna un valor por defecto si es necesario
    };
  
    try {
      const response = await fetch(`https://localhost:7037/api/User/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (response.ok) {
        const modifiedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === modifiedUser.id ? modifiedUser : user))
        );
        handleCloseEdit();
        setSuccessMessage("Usuario editado exitosamente.");
        alert("Usuario editado exitosamente.");  // Muestra un mensaje de éxito
      } else {
        const errorData = await response.json();  // Captura el mensaje de error del servidor
        console.error('Error al editar el usuario:', errorData);
        alert(`Error: ${errorData.message || response.statusText}`);  // Muestra el mensaje de error
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud, por favor intenta nuevamente.');  // Muestra un mensaje de error
    }
  };
  

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`https://localhost:7037/api/User/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        handleCloseDelete();
        setSuccessMessage("Usuario eliminado exitosamente.");
        alert("Eliminado con exito");
      } else {
        console.error('Error al eliminar el usuario de la base de datos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 id="superadminDashTitle" className="text-center mb-4 mt-4" style={{ fontSize: "30px" }}>
          Administrar Usuarios 👥
        </h1>

        {successMessage && <Alert variant="success">{successMessage}</Alert>}

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
            <Modal.Title style={{ color: "black" }}>Agregar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label style={{ color: "black" }}>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  value={newUser.firstName}
                  onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label style={{ color: "black" }}>Rol</label>
                <select
                  style={{ color: "black" }}
                  className="form-control"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: parseInt(e.target.value) })}
                >
                  <option style={{ color: "black" }} value={1}>Super Admin</option>
                  <option style={{ color: "black" }} value={2}>Admin</option>
                  <option style={{ color: "black" }} value={3}>Cliente</option>
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
            <Modal.Title style={{ color: "black" }}>Editar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedUser && (
              <form>
                <div className="form-group">
                  <label style={{ color: "black" }}>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedUser.firstName}
                    onChange={(e) => setSelectedUser({ ...selectedUser, firstName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "black" }}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={selectedUser.email}
                    onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label style={{ color: "black" }}>Rol</label>
                  <select
                    style={{ color: "black" }}
                    className="form-control"
                    value={selectedUser.role}
                    onChange={(e) => setSelectedUser({ ...selectedUser, role: parseInt(e.target.value) })}
                  >
                    <option style={{ color: "black" }} value={1}>Super Admin</option>
                    <option style={{ color: "black" }} value={2}>Admin</option>
                    <option style={{ color: "black" }} value={3}>Cliente</option>
                  </select>
                </div>
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseEdit}>
              Cancelar
            </Button>
            <Button variant="success" onClick={handleEditUser}>
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para Eliminar Usuario */}
        <Modal show={showDeleteModal} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Eliminar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>
            ¿Estás seguro de que deseas eliminar a {selectedUser ? selectedUser.firstName : ''}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseDelete}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={() => handleDeleteUser(selectedUser.id)}>
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
  setUsers: PropTypes.func.isRequired,
};

export default SuperAdminDashboard;

