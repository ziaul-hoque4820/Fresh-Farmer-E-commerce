import React from 'react'
import Navbar from '../pages/share/Navbar'
import Footer from '../pages/share/Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout