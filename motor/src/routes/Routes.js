import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Blog } from "../pages/Blog";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

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
        
        ]
    }
])