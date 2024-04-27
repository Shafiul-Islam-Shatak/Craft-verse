import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../Pages/Login";
import AddCraft from "../Pages/AddCraft";
import AllArt from "../Pages/AllArt";
import Registration from "../Pages/Registration";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>

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
                element: <AddCraft></AddCraft>
            },
            {
                path: '/all-art',
                element: <AllArt></AllArt>,
                loader: () => fetch('http://localhost:7000/craft')
            }
        ]

    }

]);


export default router;