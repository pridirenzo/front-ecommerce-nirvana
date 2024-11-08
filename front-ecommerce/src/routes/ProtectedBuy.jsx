import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const ProtectedBuy = ({ children, onBuy }) => {
  const { user } = useContext(UserContext);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleClick = () => {
    if (!user) {
      alert("Es necesario que inicie sesión para realizar una compra.");
      setRedirectToLogin(true);
    } else if (user.role !== "Client") {
      alert("Solo los clientes pueden realizar compras.");
    } else {
      onBuy();
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

ProtectedBuy.propTypes = {
  children: PropTypes.node.isRequired,
  onBuy: PropTypes.func.isRequired,
};

export default ProtectedBuy;


