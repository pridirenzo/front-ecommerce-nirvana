import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const ProtectedClient = ({ children, sendMessage }) => {
  const { user } = useContext(UserContext);

  if (user && (user.role == "Client")) {
    return children;
  } else {
    alert(sendMessage);
    return <Navigate to="/login"></Navigate>;
  }
};

export default ProtectedClient;

ProtectedClient.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};
