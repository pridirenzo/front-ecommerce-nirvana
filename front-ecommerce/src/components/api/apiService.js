import api from "./api";

export const GetProducts = async () => {
  return await api.get("api/Product");
};

export const CreateProducts = async (productData) => { // Asegúrate de recibir productData como argumento
    const response = await api.post("api/Product", productData);
    return response;
  };

export const GetUsers = () => {
    return api.get("api/User");
  }

export const createUser = async (userData) => {
    const response = await api.post("/api/User", userData);
    return response.data;
  };