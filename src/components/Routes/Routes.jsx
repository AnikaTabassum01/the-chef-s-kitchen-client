import { createBrowserRouter } from "react-router-dom";
// import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ChefRecipe from "../Pages/ChefRecipe/ChefRecipe/ChefRecipe";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'chefRecipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;