import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../Page/Home';
import Header from '../Components/Header';
import Contactus from '../Page/Contactus.';
import Product from '../Page/Product';
import ProductDetail from '../Page/ProductDetail';
import Login from '../Page/Login';
import SignUP from '../Page/SignUP';
import Footer from '../Components/Footer/Footer'


const router = createBrowserRouter([

    {
        path: "/",
        element: <Header />,
    },
    {
        path: "/Home",
        element: <Home />

    },
    {
        path: "/Product",
        element: <Product />
    }
    ,
    {
        path: "/Product/:id",
        element: <ProductDetail />
    }
    ,
    {
        path: "/ContactUs",
        element: <Contactus />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/SignUp",
        element: <SignUP />
    },




    {
        path: "/",
        element: <Footer />
    }
])

function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router