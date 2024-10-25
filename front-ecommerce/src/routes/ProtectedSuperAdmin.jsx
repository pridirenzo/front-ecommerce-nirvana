import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const ProtectedSuperAdmin = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user && user.type === "superadmin") {
    return children;
  } else {
    alert("Es necesario que tenga permiso de SuperAdmin");
    return <Navigate to="/"></Navigate>;
  }
};

export default ProtectedSuperAdmin;

ProtectedSuperAdmin.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};