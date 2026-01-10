import React from 'react'
import Counter from '../../component/Counter'

function Banner() {
    return (
        <section
            className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url("https://images.pexels.com/photos/30200995/pexels-photo-30200995.jpeg")`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"

            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Fresh from Farm to Your Table
                    </h1>
                    <p
                        className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto"
                    >
                        Connect directly with local farmers and get the freshest
                        produce delivered to your doorstep
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8 px-2">
                        <div className="bg-white dark:bg-gray-200 rounded-lg shadow-lg p-1">

                            {/* Top Row */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Search for vegetables, fruits, farmers..."
                                    className=" flex-1 px-4 py-3 text-gray-900 focus:outline-none bg-transparent"
                                />

                                <button className="bg-primary-700 hover:bg-primary-800 px-5 py-3 rounded-md transition flex items-center justify-center cursor-pointer">
                                    <i className="fas fa-search text-white"></i>
                                </button>
                            </div>

                            {/* Category Select */}
                            <div className="mt-2">
                                <select className=" w-full px-4 py-3 text-gray-900 focus:outline-none bg-white dark:bg-gray-200 border-t border-gray-500 overflow-auto">
                                    <option>All Categories</option>
                                    <option>Vegetables</option>
                                    <option>Fruits</option>
                                    <option>Grains</option>
                                    <option>Dairy</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Stats  */}
                    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold">
                                <Counter end={500} suffix="+" />
                            </div>
                            <div className="text-green-200">Local Farmers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">
                                <Counter end={2000} suffix="+" />
                            </div>
                            <div className="text-green-200">Fresh Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">
                                <Counter end={10} suffix="k+" />
                            </div>
                            <div className="text-green-200">Happy Customers</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner