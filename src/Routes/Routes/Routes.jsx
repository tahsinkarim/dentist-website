import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
]);

export default router;
