import React from 'react'

function HeroSection({ title, description, backgroundImage }) {
    return (
        <div className="bg-primary-600 text-white py-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            }}
        >
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