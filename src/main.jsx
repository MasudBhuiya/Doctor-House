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
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './components/Route/PrivateRoute';
import ContactUs from './components/Home/ContactUs';
import About from './components/Home/About';

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
        // loader: ({params}) => fetch(`https://doctor-house-server-gdhcpmj5o-masudbhuiya.vercel.app/doctors/${params.id}`)
        loader: ({params}) => fetch(`https://doctor-house-server-two.vercel.app/doctors/${params.id}`)
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
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
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
        element: <MyAppointments></MyAppointments>,
        loader: ()=> fetch('https://doctor-house-server-two.vercel.app/appoints')
      },
      {
        path: "doctorappointments",
        element: <DoctorAppointment></DoctorAppointment>
      },
      {
        path: "allusers",
        element: <Users></Users>,
        loader: ()=> fetch('https://doctor-house-server-two.vercel.app/users')
      },
      {
        path: "adddoctor",
        element: <AddDoctor></AddDoctor>
      },
      {
        path: "managedoctor",
        element: <ManageUsers></ManageUsers>,
        loader: ()=> fetch('https://doctor-house-server-two.vercel.app/doctors')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
