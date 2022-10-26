import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import CheckoutPage from "../../Pages/Courses/CheckoutPage/CheckoutPage";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/ManageUsers/LogIn/LogIn";
import Register from "../../Pages/ManageUsers/Register/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/courseDetails/${params.id}`);
                }
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <CheckoutPage></CheckoutPage>
                </PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/courseDetails/${params.id}`); 
                }
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
]);