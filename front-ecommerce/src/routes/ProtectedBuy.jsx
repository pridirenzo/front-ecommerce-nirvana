import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const ProtectedBuy = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user ) {
    return children;
  } else {
    alert("Es necesario que inicie sesion para realizar una compra.");
    return <Navigate to="/"></Navigate>;
  }
};

export default ProtectedBuy;

ProtectedBuy.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};