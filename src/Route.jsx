import { createBrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
const router=createBrowserRouter([


    {path:"/",element:<Signup />},
    {path:"/login",element:<Login />},
    {path: "/navbar", element: <Navbar />},
]);
export default router;
