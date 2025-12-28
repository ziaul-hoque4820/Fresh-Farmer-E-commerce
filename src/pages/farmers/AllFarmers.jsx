import React from 'react'
import { farmersData } from '../../data/farmers'
import Counter from '../../component/Counter'

function AllFarmers() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Stats  */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="text-center">
                    <div
                        className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    >
                        <Counter end={500} suffix="+" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                        Active Farmers
                    </div>
                </div>
                <div className="text-center">
                    <div
                        className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    >
                        <Counter end={50} suffix="+" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                        Districts Covered
                    </div>
                </div>
                <div className="text-center">
                    <div
                        className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    >
                        <Counter end={2000} suffix="+" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                        Products Available
                    </div>
                </div>
                <div className="text-center">
                    <div
                        className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                    >
                        <Counter end={95} suffix="%" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                        Organic Certified
                    </div>
                </div>
            </div>

            {/* Farmers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Farmer Card 1  */}

                {
                    farmersData.map( farmer => (
                        <div key={farmer.id}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={farmer.image}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute top-4 right-4">
                                    <span
                                        className={`${farmer.certified === true ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-1 rounded-full text-sm font-medium`}
                                    >
                                        {farmer.certified && <i className="fas fa-certificate mr-1"></i>}{farmer.certified === true ? "certified" : "Non-certified"}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3
                                        className="text-xl font-bold text-gray-900 dark:text-white"
                                    >
                                        {farmer.name}
                                    </h3>
                                    <div className="flex items-center text-yellow-400">
                                        <i className="fas fa-star"></i>
                                        <span
                                            className="text-gray-600 dark:text-gray-400 ml-1"
                                        >{farmer.rating}</span
                                        >
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 mb-3">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    {farmer.location.city}, {farmer.location.country}
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {farmer.description}
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        <span className="font-medium">Farm Size: </span> 
                                        {farmer.farmSize}
                                    </div>
                                    <div
                                        className="text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        <span className="font-medium">Products:</span> {farmer.totalProducts}
                                    </div>
                                </div>
                                <div className="flex space-x-2 mb-4">
                                    <span
                                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs"
                                    >{farmer.categories[0]}</span
                                    >
                                    <span
                                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                                    >{farmer.categories[1]}</span
                                    >
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition"
                                    >
                                        View Products
                                    </button>
                                    <a href={`tel:${farmer.phone}`} 
                                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                    >
                                        <i className="fas fa-phone"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Load More  */}
            <div className="text-center mt-12">
                <button
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition"
                >
                    Load More Farmers
                </button>
            </div>
        </div>
    )
}

export default AllFarmers