import { createBrowserRouter } from "react-router-dom";
import { AddProducts } from "../dashbord/AddProducts";
import Dashbord from "../dashbord/Dashbord";
import Main from "../layout/Main";
import { Blog } from "../pages/Blog";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        
        ]
    },
    {
        path: "/dashbord",
        element: <PrivateRoute><Dashbord /></PrivateRoute>,
        children: [
            {
                path: "/dashbord/add-product",
                element: <AddProducts />,
            },
            
        ]
    },
])