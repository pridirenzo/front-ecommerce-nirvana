import api from "./api";

//GetAll Landing

export const GetProductsPrendas = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:4:1||idCategory:5:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};

export const GetProductsMusic = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:6:1||idCategory:7:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};

export const GetProductsAccesories = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:3:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};

//GetAll de cada categoria

export const GetProductsRemeras = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:4:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};

export const GetProductsBuzos = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:5:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};

export const GetProductsVinilos = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:6:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};

export const GetProductsCDs = async ( filters, sortBy, isDescending, page, pageSize) => {
  const response = await api.get("api/Product", {
    params: {
      Filters: "idCategory:7:1",
      SortBy: "id",
      IsDescending: true,
      Page: 1,
      PageSize: 3,
    }
  });
  return response.data;
};




export const CreateProducts = async (productData) => { 
    const response = await api.post("api/Product", productData);
    return response;
  };

export const GetUsers = () => {  //para mapeo
    return api.get("api/User");
  }

export const ClientLog = (credentials) => {  
    return api.post("/api/Client/Login", credentials);
}  

export const createUser = async (userData) => {
  try {
    console.log("Enviando datos del usuario:", userData);
    const response = await api.post("/api/User/create-and-verify", userData);
    console.log("Respuesta del servidor:", response);
  
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};

export const createUser2 = async (userData) => {   //post sin mail
  try {
    console.log("Enviando datos del usuario:", userData);
    const response = await api.post("/api/User/only-create", userData);
    console.log("Respuesta del servidor:", response);
  
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};


export const updateUser = async (userId, userData) => {
  try {
    const updatedUserData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password, 
      role: userData.role,
      isActive: userData.isActive,
      id: userId, 
    };

    console.log("Actualizando datos del usuario:", userId, updatedUserData);
    const response = await api.put(`/api/User`, updatedUserData);
    console.log("Respuesta del servidor:", response);
    
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud de actualización:", error);
    throw error;
  }
};