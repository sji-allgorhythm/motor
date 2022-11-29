import { createBrowserRouter } from "react-router-dom";
import { AddProducts } from "../dashbord/AddProducts";
import { AllBuyer } from "../dashbord/AllBuyer";
import { AllProducts } from "../dashbord/AllProducts";
import { AllSeller } from "../dashbord/AllSeller";
import Dashbord from "../dashbord/Dashbord";
import { DashbordHome } from "../dashbord/DashbordHome";
import { MyProducts } from "../dashbord/MyProducts";
import Main from "../layout/Main";
import { Blog } from "../pages/Blog";
import { Category } from "../pages/Category";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Product } from "../pages/Product";
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
                path: "/category/:id",
                element: <Category />,
                loader: async ({ params }) => fetch(`${process.env.REACT_APP_url}/api/product/${params.id}`),
            },
            {
                path: "/product",
                element: <Product />,
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
                path: "/dashbord",
                element: <PrivateRoute><DashbordHome /></PrivateRoute>,
            },
            {
                path: "/dashbord/add-product",
                element: <PrivateRoute><AddProducts /></PrivateRoute>,
            },
            {
                path: "/dashbord/my-products",
                element: <PrivateRoute><MyProducts /></PrivateRoute>,
            },
            {
                path: "/dashbord/all-products",
                element: <PrivateRoute><AllProducts /></PrivateRoute>,
            },
            {
                path: "/dashbord/all/sellers",
                element: <PrivateRoute><AllSeller /></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_url}/api/user`)
            },
            {
                path: "/dashbord/all/buyers",
                element: <PrivateRoute><AllBuyer /></PrivateRoute>,
                loader: () => fetch(`${process.env.REACT_APP_url}/api/user`)
            },

        ]
    },
])