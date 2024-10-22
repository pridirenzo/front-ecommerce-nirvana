import api from "./api";

export const GetProducts = () => {
    return api.get("api/Product")
}   //x cada llamda q le hagas escribis aca, tio, si ahora qres obtener categorias tenes q llamar d aca
