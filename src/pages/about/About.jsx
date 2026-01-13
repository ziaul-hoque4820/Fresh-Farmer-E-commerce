import React from 'react'
import HeroSection from '../../component/HeroSection'
import MissionVision from './MissionVision'
import OurValues from './OurValues'
import OurImpact from './OurImpact'
import OurTeam from './OurTeam'

function About() {
    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeroSection
                title={"About FarmFresh"}
                backgroundImage={"https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                description={"We're on a mission to connect communities with fresh, local produce while supporting sustainable farming practices across Bangladesh."}
            />
            <MissionVision />
            <OurValues />
            <OurImpact />
            <OurTeam />
        </div>
    )
}

export default About