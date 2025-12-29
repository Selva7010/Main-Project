import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Add from "../Pages/Add/Add";
import List from "../Pages/List/List";
import Orders from "../Pages/Orders/Orders";

const AdminRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/add',
        element:<Add/>
    },
    {
        path:'/list',
        element:<List/>
    },
    {
        path:'/orders',
        element:<Orders/>
    }
])

export default AdminRouter