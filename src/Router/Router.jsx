import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login";
import AddCraft from "../Pages/AddCraft";
import AllArt from "../Pages/AllArt";
import Registration from "../Pages/Registration";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import MyArt from "../Pages/MyArt";
import PrivateRoutes from "./PrivateRoutes";
import UpdateCraft from "../Pages/UpdateCraft";
import ErrorPage from "../Pages/ErrorPage";
import ArtDetails from "../Pages/ArtDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader : ()=> fetch('https://craft-verse-server.vercel.app/craft')

            },

            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/reg',
                element: <Registration></Registration>
            },
            {
                path: '/add-craft',
                element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
            },
            {
                path: '/all-art',
                element: <AllArt></AllArt>,
                loader: () => fetch('https://craft-verse-server.vercel.app/craft')
            },
            {
                path: '/my-art',
                element : <PrivateRoutes><MyArt></MyArt></PrivateRoutes>
            },
            {
                path:'/update-craft/:id',
                element:<PrivateRoutes><UpdateCraft></UpdateCraft></PrivateRoutes>,
                loader :({params})=>fetch(`https://craft-verse-server.vercel.app/craft-update/${params.id}`)
            },
            {
                path:'/craft-details/:id',
                element:<PrivateRoutes><ArtDetails></ArtDetails></PrivateRoutes>,
                loader :({params})=>fetch(`https://craft-verse-server.vercel.app/craft-details/${params.id}`)
            }
        ]

    }

]);


export default router;