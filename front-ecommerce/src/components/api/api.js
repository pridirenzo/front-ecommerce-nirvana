import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7037/", // Cambia esto según la URL de tu API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


//es la conexion real al back.