import React from 'react'

function RelatedProducts() {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Related Product 1 */}
                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop"
                            alt="Fresh Carrots"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-3 right-3">
                            <button
                                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                <i className="far fa-heart text-gray-600 dark:text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Fresh Carrots
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            By Shumi's Garden
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">৳35/kg</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <span className="text-gray-600 dark:text-gray-400 ml-1">4.9</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Product 2 */}
                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop"
                            alt="Fresh Spinach"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-3 left-3">
                            <span
                                className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Organic</span>
                        </div>
                        <div className="absolute top-3 right-3">
                            <button
                                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                <i className="far fa-heart text-gray-600 dark:text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Fresh Spinach
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            By Sakib's Organics
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">৳25/kg</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <span className="text-gray-600 dark:text-gray-400 ml-1">4.7</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Product 3 */}
                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop"
                            alt="Fresh Broccoli"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-3 right-3">
                            <button
                                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                <i className="far fa-heart text-gray-600 dark:text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Fresh Broccoli
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            By Anika's Garden
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">৳55/kg</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <span className="text-gray-600 dark:text-gray-400 ml-1">4.6</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Product 4 */}
                <div
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop"
                            alt="Fresh Lettuce"
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute top-3 left-3">
                            <span
                                className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Organic</span>
                        </div>
                        <div className="absolute top-3 right-3">
                            <button
                                className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                                <i className="far fa-heart text-gray-600 dark:text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Fresh Lettuce
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            By Green Valley Farm
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">৳30/kg</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                                <i className="fas fa-star"></i>
                                <span className="text-gray-600 dark:text-gray-400 ml-1">4.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts