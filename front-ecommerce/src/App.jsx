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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
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
      <div>
        <RouterProvider router={router} />
        <Footer/>
      </div>
    </>
  );
}

export default App;
