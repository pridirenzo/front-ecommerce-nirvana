import api from "./api";

export const GetProducts = async () => {
  return await api.get("api/Product");
};

export const CreateProducts = async (productData) => { // Asegúrate de recibir productData como argumento
    const response = await api.post("api/Product", productData);
    return response;
  };
  
