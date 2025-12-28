import React from 'react'

function FiltersAndProducts() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar  */}
                <div className="lg:col-span-1">
                    <div
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24"
                    >
                        <h3
                            className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
                        >
                            Filters
                        </h3>

                        {/* Category Filter  */}
                        <div className="mb-6">
                            <h4
                                className="font-medium text-gray-900 dark:text-white mb-3"
                            >
                                Category
                            </h4>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >Vegetables (45)</span
                                    >
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >Fruits (32)</span
                                    >
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >Grains (18)</span
                                    >
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >Dairy (12)</span
                                    >
                                </label>
                            </div>
                        </div>

                        {/* Price Range  */}
                        <div className="mb-6">
                            <h4
                                className="font-medium text-gray-900 dark:text-white mb-3"
                            >
                                Price Range
                            </h4>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="price"
                                        className="border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >Under ৳30</span
                                    >
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="price"
                                        className="border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >৳30 - ৳50</span
                                    >
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="price"
                                        className="border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >৳50 - ৳100</span
                                    >
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="price"
                                        className="border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                    <span
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >Over ৳100</span
                                    >
                                </label>
                            </div>
                        </div>

                        {/* Location  */}
                        <div className="mb-6">
                            <h4
                                className="font-medium text-gray-900 dark:text-white mb-3"
                            >
                                Location
                            </h4>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            >
                                <option>All Locations</option>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Sylhet</option>
                                <option>Rangpur</option>
                            </select>
                        </div>

                        {/* Organic Filter  */}
                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                />
                                <span
                                    className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                >Organic Only</span
                                >
                            </label>
                        </div>

                        <button
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FiltersAndProducts