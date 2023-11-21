import { createBrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
const router=createBrowserRouter([


    {path:"/",element:<Navbar />},
    {path:"/login",element:<Login />},
    {path: "/signup", element: <Signup />},
]);
export default router;
