import React from 'react'

const values = [
    {
        title: "Sustainability",
        icon: "fa-leaf",
        description: "We promote eco-friendly farming practices that protect our environment for future generations."
    },
    {
        title: "Community",
        icon: "fa-handshake",
        description: "Building strong relationships between farmers and consumers to create thriving local communities."
    },
    {
        title: "Quality",
        icon: "fa-award",
        description: "Ensuring the highest standards of freshness, taste, and nutritional value in every product."
    }
]

function OurValues() {
    return (
        <div className="bg-white dark:bg-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Our Values
                    </h2>
                    <p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        These core values guide everything we do and shape our
                        commitment to farmers and customers alike.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        values.map((value) => (
                            <div key={value.title} className="text-center">
                                <div
                                    className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                >
                                    <i
                                        className={`fas ${value.icon} text-2xl text-primary-600 dark:text-primary-400`}
                                    ></i>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                                >
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurValues