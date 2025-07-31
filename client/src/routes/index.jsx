import App from "../App";
import About from "../Page/About";
import Home from "../Page/Home";
import Project from "../Page/Project";
import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([


    {
        path:"/",
        element: <App/>,

        children:[
            {path:'/',
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/project",
                element:<Project/>
            }

        ]
    }

])

export default router