import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7037/",  //cambiar dependiendo del localhost de cada uno 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

//es la conexion real al back.