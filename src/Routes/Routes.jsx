import { Routes } from "react-router"
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPages from "../Pages/ErrorPages";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import PhoneDetails from "../Pages/PhoneDetails";
import About from "../Pages/About";


 const  router = createBrowserRouter([
    {
      path:'/',
      Component: MainLayout,
      errorElement:<ErrorPages/>,
    children: [
        {
            path:'/',
           Component: Home,
           hydrateFallbackElement:<p>Loading please wait...</p>,
           loader: ()=> fetch('phones.json')
        },
        {
            path:'/favorites',
            Component: Favorites
        },
        {
            path:'/about',
            Component: About
        },
        {
            path:'/phone-details/:id',
            loader: () => fetch('../phones.json'),
            hydrateFallbackElement:<p>Loading, please wait.....</p>,
            Component: PhoneDetails
        },
      ]
    },
  ])

  export default router;