import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user && (user.role === 2 || user.role ===3)) {
    return children;
  } else {
    alert("Es necesario que tenga permiso de Admin o SysAdmin");
    return <Navigate to="/"></Navigate>;
  }
};

export default Protected;

Protected.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};
