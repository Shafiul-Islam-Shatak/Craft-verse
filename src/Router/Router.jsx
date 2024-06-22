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
import LandScapeCat from "../Pages/Categorys/LandScapeCat";
import PortraitDrawing from "../Pages/Categorys/PortraitDrawing";
import WatercolourPainting from "../Pages/Categorys/WatercolourPainting";
import OilPainting from "../Pages/Categorys/OilPainting";
import CharcoalSketching from "../Pages/Categorys/CharcoalSketching";
import CartoonDrawing from "../Pages/Categorys/CartoonDrawing";
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
                path: '/landscape-cat',
                element: <LandScapeCat></LandScapeCat>,
                loader: () => fetch('https://craft-verse-server.vercel.app/landscape-cat')
            },
            {
                path: '/Portrait-Drawing',
                element: <PortraitDrawing></PortraitDrawing>,
                loader: () => fetch('https://craft-verse-server.vercel.app/Portrait-Drawing')
            },
            {
                path: '/Watercolour-Painting',
                element: <WatercolourPainting></WatercolourPainting>,
                loader: () => fetch('https://craft-verse-server.vercel.app/Watercolour-Painting')
            },
            {
                path: '/Oil-Painting',
                element: <OilPainting></OilPainting>,
                loader: () => fetch('https://craft-verse-server.vercel.app/Oil-Painting')
            },
            {
                path: '/Charcoal-Sketching',
                element: <CharcoalSketching></CharcoalSketching>,
                loader: () => fetch('https://craft-verse-server.vercel.app/Charcoal-Sketching')
            },
            {
                path: '/Cartoon-Drawing',
                element: <CartoonDrawing></CartoonDrawing>,
                loader: () => fetch('https://craft-verse-server.vercel.app/Cartoon-Drawing')
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