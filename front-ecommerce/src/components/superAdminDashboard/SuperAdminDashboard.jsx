import "bootstrap/dist/css/bootstrap.min.css";
import SuperAdminNavbar from "../superAdminNavbar/SuperAdminNavbar";
import PropTypes from "prop-types";

const SuperAdminDashboard = ({ users }) => {
  return (
    <>
      <SuperAdminNavbar />
      <div>
        <h1 className="text-center mb-4">Administrar Usuarios 👥</h1>;
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li> // aca mapeariamos usuarios con sus props etc
          ))}
        </ul>
      </div>
    </>
  );
};
export default SuperAdminDashboard;


SuperAdminDashboard.propTypes = {
  users: PropTypes.function
};

