import React from 'react'

function HeroSection({title, description}) {
    return (
        <div className="bg-primary-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl font-bold mb-6">{title}</h1>
                <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default HeroSection