import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Loading from "../component/extra/Loading";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import Service from "../pages/Service";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../component/Auth/AuthPage/LogIn";
import SignUp from "../component/Auth/AuthPage/SignUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
       path : '/Covarage-Area',
       element: <Coverage></Coverage> ,
       loader : () => fetch('warehouses.json').then(res=> res.json())
      },
      {
        path: '/Service',
        element: <Service></Service>
      }
    ]
  },
  {
    path: '/',
    element : <AuthLayout></AuthLayout>,
     hydrateFallbackElement: <Loading></Loading>,
    children : [
      {
        path : 'Login',
        element : <LogIn></LogIn>
      },
      {
        path : '/Resister' , 
        element : <SignUp></SignUp>
      }
    ]
  }
])