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
import { GetProducts, GetUsers, createUser } from "./components/api/apiService";
import Prendas from "./components/prendas/Prendas"
import Music from "./components/Music/Music";
import Accesories from "./components/accesorios/Accesories";

function App() {

  // FETCHEO PRODUCTOS
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProducts()
      console.log(Products.data)
      setProducts(Products.data.data)
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
      element: <Landing products = {products} />,
    },
    { path: "/login", 
      element: <LogIn users={users}/> 
    },
    { path: "/register",
      element: <SignIn createUser={() => createUser}/>
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
      element: <AdminDashboard products = {products}/>
    },
    { path: "/superadmin",
      element: <SuperAdminDashboard users={users}/>
    },
    { path: "/prendas",
      element: <Prendas products = {products} />
    },
    { path: "/music",
      element: <Music products = {products} />
    },
    { path: "/accesories",
      element: <Accesories products = {products} />
    }
    

  ]);


  return (
    <>
      <div>
        <RouterProvider router={router} />
        <Footer/>
      </div>
    </>
  );
}

export default App;
