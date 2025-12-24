import React from 'react'
import Navbar from './pages/share/Navbar'
import Banner from './pages/home/Banner'
import Category from './pages/home/Category'
import ChooseUs from './pages/home/ChooseUs'
import Newsletter from './pages/home/Newsletter'

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Category />
            <ChooseUs />
            <Newsletter />
        </>
    )
}

export default App