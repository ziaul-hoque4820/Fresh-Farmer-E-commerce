import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Farmers from '../pages/farmers/Farmers'
import ProductsPage from '../pages/products/ProductsPage'
import Login from '../pages/authentications/Login'
import Register from '../pages/authentications/Register'
import TermsPrivacy from '../component/TermsPrivacy'

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'farmers',
                element: <Farmers />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'termsPrivacy',
                element: <TermsPrivacy />
            },
        ]
    }
])

export default router