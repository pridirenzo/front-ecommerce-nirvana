import Landing from "./components/landing/Landing";
import LogIn from "./components/logIn/LogIn";
import SignIn from "./components/signIn/SignIn";
import Profile from "./components/profile/Profile";
import ProductDetail from "./components/productDetail/productDetail";
import PurchaseDetail from "./components/purchaseDetail/PurchaseDetail";
import NotFound from "./routes/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/footer/Footer";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
import SuperAdminDashboard from "./components/superAdminDashboard/SuperAdminDashboard";
import { useEffect, useState } from "react";
import { GetUsers, createUser , GetProductsMusic, GetProductsPrendas, GetProductsAccesories, GetProductsVinilos, GetProductsRemeras, GetProductsCDs, GetProductsBuzos} from "./components/api/apiService";
import Prendas from "./components/prendas/Prendas"
import Music from "./components/Music/Music";
import Accesories from "./components/accesorios/Accesories";
import Cart from "./components/cart/Cart";  
import { CartProvider } from "./components/cart/CartProvider";

function App() {

  // FETCHEO PRODUCTOS
  const [productsprendas, setProductsPrendas] = useState([]);
  const [productsmusic, setProductsMusic] = useState([]);
  const [productsaccesories, setProductsAccesories] = useState([]);
  const [productsremeras, setProductsRemeras] = useState([]);
  const [productsbuzos, setProductsBuzos] = useState([]);
  const [productsvinilos, setProductsVinilos] = useState([]);
  const [productscds, setProductsCDs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProductsPrendas()
      setProductsPrendas(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])

   useEffect(() => {
     const fetchData = async () => {try {
       const Products = await GetProductsMusic()
       setProductsMusic(Products.data)
     } catch (error) {
       console.log(error)
     }} 
     fetchData()
   }, [])

   useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProductsAccesories()
      setProductsAccesories(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])
 
  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProductsRemeras()
      setProductsRemeras(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProductsBuzos()
      setProductsBuzos(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProductsVinilos()
      setProductsVinilos(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProductsCDs()
      setProductsCDs(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])


  // FETCHEO USUARIOS 

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Users = await GetUsers();
        console.log(Users.data);
        setUsers(Users.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing 
      productsprendas = {productsprendas}
      productsmusic = {productsmusic}                   
      productsaccesories = {productsaccesories} />,
    },
    { path: "/login", 
      element: <LogIn users={users}/> 
    },
    { path: "/register",
      element: <SignIn createUser={createUser}/>
    },
    { path: "/profile",
      element: <Profile />
    },
    { path: "/product",
      element: <ProductDetail />
    },
    { path: "*",
      element: <NotFound/>
    },
    { path: "/purchase",
      element: <PurchaseDetail/>
    },
    { path: "/admin",
      element: <AdminDashboard
      productsprendas = {productsprendas}
      productsmusic = {productsmusic}                   
      productsaccesories = {productsaccesories} />
    },
    { path: "/superadmin",
      element: <SuperAdminDashboard users={users}/>
    },
    { path: "/prendas",
      element: <Prendas 
      productsremeras = {productsremeras}
      productsbuzos = {productsbuzos}
      />
    },
    { path: "/music",
      element: <Music 
      productsvinilos = {productsvinilos} 
      productscds = {productscds}
      />
    },
    { path: "/accesories",
      element: <Accesories productsaccesories = {productsaccesories} />
    },
    { path: "/cart", 
      element: <Cart /> }

  ]);


  return (
    <>
      <CartProvider> 
        <div>
          <RouterProvider router={router} />
          <Footer/>
        </div>
      </CartProvider> {/* con esto nos ahorramos estar instanciando el CartContext en cada component y lo podemos usar directamente*/}
    </>
  );
}

export default App;
