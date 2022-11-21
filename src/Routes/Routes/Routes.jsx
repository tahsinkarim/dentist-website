import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../Pages/Dashboard/Dashboard/MyAppointment/MyAppointment";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Home from "../../Pages/Home/Home/Home";
import DashboardLayout from "../../Pages/Layout/DashboardLayout";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
