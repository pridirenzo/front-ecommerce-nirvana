import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../navbar/NavBar";
import PropTypes from "prop-types";
import { Table, Modal, Button, Alert } from "react-bootstrap";

const SuperAdminDashboard = ({ users, setUsers, createUser2, updateUser }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ firstName: "", lastName: "", email: "", password: "", role: 3 });
  const [successMessage, setSuccessMessage] = useState("");
  

  const handleCloseEdit = () => setShowEditModal(false);
  const handleCloseDelete = () => setShowDeleteModal(false);
  const handleCloseAdd = () => setShowAddModal(false);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    // Tenga al menos 8 caracteres (.{8,})
    // Contenga al menos una mayúscula ((?=.*[A-Z]))
    // Contenga al menos un número ((?=.*\d))
    // Contenga al menos un carácter especial ((?=.*[!@#$%^&*]))
    return passwordRegex.test(password);
  };

  const handleShowEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleShowDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleShowAdd = () => {
    setNewUser({ firstName: "", lastName:"", email: "", password: "", confirmPassword: "", role: 3 });
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

  const handleAddUser = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = newUser;

    if (!validatePassword(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial");
      return;
    }

    try {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        role: newUser.role,
        isActive: 1
      };

      const response = await createUser2(userData);
      console.log('Nuevo usuario creado:', response.data);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      alert("Usuario creado con exito");
      handleCloseAdd();
      window.location.reload();  //linea que hace el reload, borrar cuando se arregle error de id
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
      alert("Error al crear la cuenta");
    }
  };

  const handleEditUser = async () => {
    if (!selectedUser) return;
  
    const updatedUser = {
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName || '',
      email: selectedUser.email,
      role: selectedUser.role,
      isActive: selectedUser.isActive !== undefined ? selectedUser.isActive : 1,
    };
  
    try {
      await updateUser(selectedUser.id, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === selectedUser.id ? { ...user, ...updatedUser } : user))
      );
      handleCloseEdit();
      setSuccessMessage('Usuario editado exitosamente.');
    } catch (error) {
      console.error('Error al editar el usuario:', error);
      alert('Error en la solicitud, por favor intenta nuevamente.');
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

        <Modal show={showAddModal} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Agregar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <form onSubmit={handleAddUser}>
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
                <label style={{ color: "black" }}>Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  value={newUser.lastName}
                  onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
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
                  className="form-control"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: parseInt(e.target.value) })}
                >
                  <option value={1}>Super Admin</option>
                  <option value={2}>Admin</option>
                  <option value={3}>Cliente</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={handleAddUser}>
              Agregar Usuario
            </Button>
          </Modal.Footer>
        </Modal>

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
                  <label style={{ color: "black" }}>Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedUser.lastName}
                    onChange={(e) => setSelectedUser({ ...selectedUser, lastName: e.target.value })}
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
                    className="form-control"
                    value={selectedUser.role}
                    onChange={(e) => setSelectedUser({ ...selectedUser, role: parseInt(e.target.value) })}
                  >
                    <option value={1}>Super Admin</option>
                    <option value={2}>Admin</option>
                    <option value={3}>Cliente</option>
                  </select>
                </div>
                <div className="form-group">
                  <label style={{ color: "black" }}>Activo</label>
                  <select
                    className="form-control"
                    value={selectedUser.isActive}
                    onChange={(e) => setSelectedUser({ ...selectedUser, isActive: parseInt(e.target.value) })}
                  >
                    <option value={1}>Activo</option>
                    <option value={0}>Inactivo</option>
                  </select>
                </div>
                <Button variant="success" onClick={handleEditUser} className="mt-2">
                  Guardar Cambios
                </Button>
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseEdit}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showDeleteModal} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>Eliminar Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "black" }}>¿Estás seguro de que deseas eliminar este usuario?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={() => handleDeleteUser(selectedUser?.id)}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

SuperAdminDashboard.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
  createUser2: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default SuperAdminDashboard;