import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Loading from "../component/extra/Loading";
import Home from "../pages/Home";
import Coverage from "../pages/Coverage";
import Service from "../pages/Service";

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
  }
])