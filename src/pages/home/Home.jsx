import React from 'react'
import Banner from './Banner'
import Category from './Category'
import FeaturedProducts from './FeaturedProducts'
import ChooseUs from './ChooseUs'
import Newsletter from './Newsletter'

function Home() {
    return (
        <>
            <Banner />
            <Category />
            <FeaturedProducts />
            <ChooseUs />
            <Newsletter />
        </>
    )
}

export default Home