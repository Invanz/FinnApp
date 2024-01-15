import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Data } from "./pages/data/Data";
import { Layout } from "./components/Layout";
import { ErrorPage } from "./pages/error/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import { Register } from "./pages/register/Register";

const router = createBrowserRouter([
  {
    element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { 
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "data",
          element: <Data />
        },
        {
          path: "register",
          element: <Register />
        }
      ]
  }
]);

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App;
