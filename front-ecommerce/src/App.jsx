import './App.css'
import Landing from './components/landing/Landing';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
  ]);



  return (
    <>
     <div>
        <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App;
