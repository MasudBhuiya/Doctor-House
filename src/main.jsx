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
import Recharts from './components/Dashboard/Recharts';
import PatientsChart from './components/Dashboard/PatientsChart';

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
        path: "doctor-profile/:id",
        element:<DoctorProfile></DoctorProfile>,
        loader: ({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>
      },
      // {
      //   path: 'services',
      //   element:
      // }
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
        path: '',
        element: <Recharts></Recharts>,
        children: [
          {
            path: '',
            element: <PatientsChart></PatientsChart>
          }
        ]
      },
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
