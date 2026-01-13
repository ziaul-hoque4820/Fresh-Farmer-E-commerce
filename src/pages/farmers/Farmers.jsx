import React from 'react'
import HeroSection from '../../component/HeroSection'
import FarmerCTA from './FarmerCTA'
import AllFarmers from './AllFarmers'

function Farmers() {
    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeroSection
                title={"Meet Our Farmers"}
                backgroundImage={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                description={"Discover the passionate farmers who grow fresh, organic produce with care and dedication"}
            />
            <AllFarmers />
            <FarmerCTA />
        </div>
    )
}

export default Farmers