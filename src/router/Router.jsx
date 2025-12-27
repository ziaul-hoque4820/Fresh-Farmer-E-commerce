import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Farmers from '../pages/farmers/Farmers'

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
                path: 'farmers',
                element: <Farmers />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

export default router