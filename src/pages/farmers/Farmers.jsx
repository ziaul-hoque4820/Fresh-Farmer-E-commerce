import React from 'react'
import HeroSection from '../../component/HeroSection'
import FarmerCTA from './FarmerCTA'

function Farmers() {
    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeroSection
                title={"Meet Our Farmers"}
                description={"Discover the passionate farmers who grow fresh, organic produce with care and dedication"}
            />
            <FarmerCTA />
        </div>
    )
}

export default Farmers