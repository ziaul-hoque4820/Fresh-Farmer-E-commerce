import React from 'react'
import Navbar from './pages/share/Navbar'
import Banner from './pages/home/Banner'
import Category from './pages/home/Category'
import ChooseUs from './pages/home/ChooseUs'
import Newsletter from './pages/home/Newsletter'
import Footer from './pages/share/Footer'
import FeaturedProducts from './pages/home/FeaturedProducts'

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Category />
            <FeaturedProducts />
            <ChooseUs />
            <Newsletter />
            <Footer />
        </>
    )
}

export default App