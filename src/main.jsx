import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import Login from './components/Login/Login';
import ErrorPage from './components/Error/ErrorPage';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Appointment from './components/Appointment/Appointment';
import MyAppointments from './components/Dashboard/User/MyAppointments';
import DoctorAppointment from './components/Dashboard/Doctor/DoctorAppointment';
import Users from './components/Dashboard/Admin/Users';
import AddDoctor from './components/Dashboard/Admin/AddDoctor';
import ManageUsers from './components/Dashboard/Admin/ManageUser/ManageUsers';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "doctor-profile",
        element:<DoctorProfile></DoctorProfile>
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: "dashboard",
    element:<Dashboard></Dashboard>,
    children: [
      {
        path: "myappointments",
        element: <MyAppointments></MyAppointments>
      },
      {
        path: "doctorappointments",
        element: <DoctorAppointment></DoctorAppointment>
      },
      {
        path: "allusers",
        element: <Users></Users>
      },
      {
        path: "adddoctor",
        element: <AddDoctor></AddDoctor>
      },
      {
        path: "managedoctor",
        element: <ManageUsers></ManageUsers>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
