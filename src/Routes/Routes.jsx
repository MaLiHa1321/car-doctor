import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/home/Home";
import Login from "../Layout/Authentication/Login";
import Register from "../Layout/Authentication/Register";
import ServiceCard from "../pages/home/ServiceCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../pages/home/Blog";
import SingleService from "../pages/SingleService/SingleService";
import CheckOut from "../pages/SingleService/CheckOut";
import Bookings from "../pages/Booking/Bookings";

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
        },
        {
          path: '/serviceDetails/:id',
          element: <PrivateRoute>

            <SingleService></SingleService>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/booking',
          element: <PrivateRoute>

            <Bookings></Bookings>
          </PrivateRoute>
        }
      ]
    },
  ]);

export default router;