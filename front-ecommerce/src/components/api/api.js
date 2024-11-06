import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5286/", // Cambia esto según la URL de tu API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


//es la conexion real al back.