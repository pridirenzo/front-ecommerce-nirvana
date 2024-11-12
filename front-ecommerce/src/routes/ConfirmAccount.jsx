import PropTypes from "prop-types";
import { Navigate, useParams } from "react-router-dom";
import api from "../components/api/api";
import { useEffect, useState } from "react";

const ConfirmAccount = () => {
  const { token } = useParams();
  const [isVerified, setIsVerified] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        await api.post("api/User/verify", {
          params: {
            token: JSON.stringify(token),
          },
        });
        alert("Se ha verificado su cuenta correctamente.");
        setIsVerified(true);
      } catch (err) {
        alert("Hubo un error verificando su cuenta, intentelo nuevamente.");
        setError(err);
      }
    };

    verifyAccount();
  }, [token]);

  if (isVerified) {
    return <Navigate to="/login" />;
  }

  if (error) {
    return <Navigate to="/" />;
  }

  return <div>Verificando su cuenta...</div>;
};

export default ConfirmAccount;

ConfirmAccount.propTypes = {
  token: PropTypes.string,
};
