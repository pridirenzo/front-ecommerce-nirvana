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
import {
  GetUsers,    //para mapeo
  ClientLog,    
  createUser,   //con mailing 
  createUser2,    
  GetProductsMusic,
  GetProductsPrendas,
  GetProductsAccesories,
  GetProductsVinilos,
  GetProductsRemeras,
  GetProductsCDs,
  GetProductsBuzos,
  updateUser,
} from "./components/api/apiService";
import Clothes from "./components/clothes/Clothes";
import Music from "./components/Music/Music";
import Accessories from "./components/accessories/Accessories";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./components/cart/CartProvider";
import ResetPassword from "./components/resetPassword/ResetPassword";
import NewPassword from "./components/newResetPassword/NewResetPassword";
import NewResetPassword from "./components/newResetPassword/NewResetPassword";
import SalesDashboard from "./components/salesDashboard/SalesDashboard";
import ProtectedSuperAdmin from "./routes/ProtectedSuperAdmin";
import Protected from "./routes/Protected";
import ProtectedBuy from "./routes/ProtectedBuy";
import ProtectedLogin from "./routes/ProtectedLogin";
import { UserContextProvider } from "./services/authentication/user.context"
import LandingBuzos from "./components/landingproducts/LandingBuzos"
import LandingRemeras from "./components/landingproducts/landingremeras";
import LandingVinilos from "./components/landingproducts/LandingVinilos";
import LandingCDs from "./components/landingproducts/LandingCDs";
import LandingAccesorios from "./components/landingproducts/LandingAccesorios";



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
    const fetchData = async () => {
      try {
        const Products = await GetProductsPrendas();
        setProductsPrendas(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Products = await GetProductsMusic();
        setProductsMusic(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Products = await GetProductsAccesories();
        setProductsAccesories(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Products = await GetProductsRemeras();
        setProductsRemeras(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Products = await GetProductsBuzos();
        setProductsBuzos(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Products = await GetProductsVinilos();
        setProductsVinilos(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Products = await GetProductsCDs();
        setProductsCDs(Products.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
      element: (
        <Landing
          productsprendas={productsprendas}
          productsmusic={productsmusic}
          productsaccesories={productsaccesories}
        />
      ),
    },
    { path: "/login", 
      element: <LogIn ClientLog={ClientLog} /> 
    },
    { path: "/register", 
      element: <SignIn createUser={createUser} /> 
    },
    { path: "/profile", 
      element: 
      <ProtectedLogin>
        <Profile />
      </ProtectedLogin> 
    },
    { path: "/product", 
      element: <ProductDetail /> 
    },
    { path: "*", 
      element: <NotFound /> 
    },
    { path: "/purchase", 
      element: 
         <ProtectedLogin>
          <PurchaseDetail /> 
         </ProtectedLogin>
      },
    { path: "/admin",
      element: (
         //<Protected> 
          <AdminDashboard
            productsprendas={productsprendas}
            productsmusic={productsmusic}
            productsaccesories={productsaccesories}
          />
         //</Protected> 
      ),
    },
    {
      path: "/superadmin",
      element: (
        //<ProtectedSuperAdmin>
          <SuperAdminDashboard users={users} setUsers={setUsers} createUser2={createUser2} updateUser={updateUser} />
        //</ProtectedSuperAdmin>
      ),
    },
    {
      path: "/clothes",
      element: (
        <Clothes
          productsremeras={productsremeras}
          productsbuzos={productsbuzos}
        />
      ),
    },
    {
      path: "/music",
      element: (
        <Music productsvinilos={productsvinilos} productscds={productscds} />
      ),
    },
    { path: "/cart", 
      element: (
        <ProtectedLogin>
          <Cart />
        </ProtectedLogin>
      ), 
    },
    {
      path: "/resetpassword",
      element: <ResetPassword/>
    },
    { path: "/newresetpassword",
      element: <NewResetPassword/>
    },
    { path: "/salesdashboard",
      element:(
        <Protected>
          <SalesDashboard/>
        </Protected>
      ),
    },
    { path: "/tees",
      element: <LandingRemeras/>
    },
    { path: "/sweatshirts",
      element: <LandingBuzos/>
    },
    { path: "/vinyls",
      element: <LandingVinilos/>
    },
    { path: "/cds",
      element: <LandingCDs/>
    },
    { path: "/accessories",
      element: <LandingAccesorios/>
    }

  ]);

  return (
    <UserContextProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Footer />
      </CartProvider>
    </UserContextProvider>
  );

}

export default App;
