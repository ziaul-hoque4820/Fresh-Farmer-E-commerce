import React from 'react'
import HeroSection from '../../component/HeroSection'
import MissionVision from './MissionVision'

function About() {
    return (
        <div className='dark:bg-gray-900'>
            <HeroSection
                title={"About FarmFresh"}
                description={"We're on a mission to connect communities with fresh, local produce while supporting sustainable farming practices across Bangladesh."}
            />
            <MissionVision />
        </div>
    )
}

export default About