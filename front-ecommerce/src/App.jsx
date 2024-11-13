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
import { useEffect, useState, useContext } from "react";
import {
  GetOrders,
  GetUsers, //para mapeo
  ClientLog,
  createUser, //con mailing
  createUser2,
  GetProducts,
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
import ProtectedClient from "./routes/ProtectedClient";
import {UserContextProvider, UserContext } from "./services/authentication/user.context";
import LandingBuzos from "./components/landingproducts/LandingBuzos";
import LandingRemeras from "./components/landingproducts/landingremeras";
import LandingVinilos from "./components/landingproducts/LandingVinilos";
import LandingCDs from "./components/landingproducts/LandingCDs";
import LandingAccesorios from "./components/landingproducts/LandingAccesorios";
import Accesories from "./components/accessories/Accessories";
import AdminLandingRemeras from "./components/adminLandingProducts/AdminLandingRemeras"
import AdminLandingBuzos from "./components/adminLandingProducts/AdminLandingBuzos";
import AdminLandingVinilos from "./components/adminLandingProducts/AdminLandingVinilos";
import AdminLandingCDs from "./components/adminLandingProducts/AdminLandingCDs";
import AdminLandingAccesorios from "./components/adminLandingProducts/AdminLandingAccesorios";
import ConfirmAccount from "./routes/ConfirmAccount";
import LoaderContextProvider, { LoaderContext } from "./services/loadercontext/LoaderContext";

function App() {
  const [productsprendas, setProductsPrendas] = useState([]);
  const [productsmusic, setProductsMusic] = useState([]);
  const [productsaccesories, setProductsAccesories] = useState([]);
  const [productsremeras, setProductsRemeras] = useState([]);
  const [productsbuzos, setProductsBuzos] = useState([]);
  const [productsvinilos, setProductsVinilos] = useState([]);
  const [productscds, setProductsCDs] = useState([]);
  const [products, setProducts] = useState([]);
  const {user} = useContext(UserContext);
  const { toggleLoading } = useContext(LoaderContext);


  //fetcheo de todos los productos

  useEffect(() => {
    const fetchProducts = async () => {
      toggleLoading(true);
      try {
        const Products = await GetProducts();
        setProducts(Array.isArray(Products) ? Products : []);
        toggleLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);


  // fetcheo prendas
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

  // fetcheo discografia
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

  // fetcheo accesorios
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

  // fetcheo remeras
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

  // fetcheo buzos
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

  // fetcheo vinilos
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

  // fetcheo cds
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

  // -----------------------------
  // FETCHEO USUARIOS
  // -------------------------------

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user || (user.role !== "Admin" && user.role !== "Sysadmin")) return;
        const Users = await GetUsers();
        setUsers(Users.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  // -----------------------------
  // FETCHEO Ordenes
  // -------------------------------
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await GetOrders();
        const data = response.data.data;
        setOrders(data);
      } catch (error) {
        console.error("Error al obtener las órdenes:", error);
      }
    };

    fetchOrders();
  }, []);


  // ----------------------------------------------------------------------------

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
    { path: "/login", element: <LogIn ClientLog={ClientLog} /> },
    { path: "/register", element: <SignIn createUser={createUser} /> },
    {
      path: "/profile",
      element: (
        <ProtectedLogin>
        <Profile />
        </ProtectedLogin>
      ),
    },
    { path: "/product/:id", element: <ProductDetail /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/purchase",
      element: (

        <PurchaseDetail />

      ),
    },
    {
      path: "/admin",
      element: (
        <Protected>
        <AdminDashboard
          productsprendas={productsprendas}
          productsmusic={productsmusic}
          productsaccesories={productsaccesories}
        />
        </Protected>
      ),
    },
    {
      path: "/superadmin",
      element: (
        //<ProtectedSuperAdmin>
        <SuperAdminDashboard
          users={users}
          setUsers={setUsers}
          createUser2={createUser2}
          updateUser={updateUser}
        />
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
        <Music 
        productsvinilos={productsvinilos} 
        productscds={productscds} />
      ),
    },
    {
      path: "/accessories",
      element: <Accesories productsaccesories={productsaccesories} />,
    },
    {
      path: "/cart",
      element: (
        <ProtectedClient sendMessage="Solo los clientes pueden realizar compras. Por favor, inicia sesión o registrate.">
        <Cart />
        </ProtectedClient>
      ),
    },
    {
      path: "/resetpassword",
      element: <ResetPassword />,
    },
    { path: "/newresetpassword", element: <NewResetPassword /> },
    {
      path: "/salesdashboard",
      element: (
        //<Protected>
        <SalesDashboard orders={orders} setOrders={setOrders} products={products} users={users}/>
        //</Protected>
      ),
    },
    { path: "/tees", element: <LandingRemeras /> },
    { path: "/sweatshirts", element: <LandingBuzos /> },
    { path: "/vinyls", element: <LandingVinilos /> },
    { path: "/cds", element: <LandingCDs /> },
    { path: "/accesories", element: <LandingAccesorios /> },

    
    {path: "/admintees", element: <Protected><AdminLandingRemeras /></Protected>},
    {path: "/adminsweatshirts", element: <Protected><AdminLandingBuzos /></Protected>},
    {path: "/adminvinyls", element: <Protected><AdminLandingVinilos/></Protected>},
    {path: "/admincds", element: <Protected><AdminLandingCDs/></Protected>},
    {path: "/adminaccessories", element: <Protected><AdminLandingAccesorios/></Protected>},
    {path: "/confirmAccount/:token", element: <ConfirmAccount />}

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
