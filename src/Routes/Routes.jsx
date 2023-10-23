import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/home/Home";
import Login from "../Layout/Authentication/Login";
import Register from "../Layout/Authentication/Register";
import ServiceCard from "../pages/home/ServiceCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../pages/home/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/blog',
          element: <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        }
      ]
    },
  ]);

export default router;