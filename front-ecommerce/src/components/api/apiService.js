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