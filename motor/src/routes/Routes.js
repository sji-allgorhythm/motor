import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { HomePage } from "../pages/HomePage";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ]
    }
])