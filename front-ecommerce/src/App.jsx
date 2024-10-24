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
import { GetProducts } from "./components/api/apiService";
import Navbar from './components/navbar/NavBar';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {try {
      const Products = await GetProducts()
      console.log(Products.data)
      setProducts(Products.data)
    } catch (error) {
      console.log(error)
    }} 
    fetchData()
  }, [])



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing products = {products} />,
    },
    { path: "/login", 
      element: <LogIn /> 
    },
    { path: "/register",
      element: <SignIn />
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
      element: <AdminDashboard/>
    },
    { path: "/superadmin",
      element: <SuperAdminDashboard/>
    }
  ]);


  return (
    <>
      <Navbar />
      <div>
        <RouterProvider router={router} />
        <Footer/>
      </div>
    </>
  );
}

export default App;
