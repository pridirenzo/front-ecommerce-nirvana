import "bootstrap/dist/css/bootstrap.min.css";
import SuperAdminNavbar from "../superAdminNavbar/SuperAdminNavbar";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const SuperAdminDashboard = ({ users }) => {
  // función para convertir el rol numerico en texto
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

  return (
    <>
      <SuperAdminNavbar/>
      <div className="container">
        <h1 id="superadminDashTitle" className="text-center mb-4 mt-4" style={{fontSize: "30px"}}>Administrar Usuarios 👥</h1>
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
                <td>{getRoleName(user.role)}</td> {/* Renderiza el rol como texto */}
                <td>
                  <button className="btn btn-dark btn-sm me-2">Editar</button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
      role: PropTypes.number.isRequired, // El rol ahora es un número
    })
  ).isRequired,
};

export default SuperAdminDashboard;
