import React from 'react'
import { productsData } from '../../data/products'
import ProductCart from '../../component/ProductCart'

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

                {/* Products Grid  */}
                <div className="lg:col-span-3">
                    {/* Sort and View Options */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-600 dark:text-gray-400">
                            Showing 1-12 of 48 products
                        </p>
                        <div className="flex items-center space-x-4">
                            <select
                                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                            >
                                <option>Sort by: Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                                <option>Rating</option>
                            </select>
                            <div
                                className="flex border border-gray-300 dark:border-gray-600 rounded-lg"
                            >
                                <button
                                    className="p-2 bg-primary-600 text-white rounded-l-lg"
                                >
                                    <i className="fas fa-th"></i>
                                </button>
                                <button
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg"
                                >
                                    <i className="fas fa-list"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid  */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {
                            productsData?.map(product => (
                                <ProductCart key={product.id} product={product} />
                            ))
                        }
                    </div>

                    {/* Pagination  */}
                    <div className="flex justify-center mt-12">
                        <nav aria-label="Pagination">
                            <ul
                                className="inline-flex items-center -space-x-px text-gray-600 dark:text-gray-300"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <i className="fas fa-chevron-left"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >1</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="px-3 py-2 leading-tight text-white bg-primary-600 border border-primary-600 hover:bg-primary-700 hover:text-white"
                                    >2</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >3</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >4</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <i className="fas fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiltersAndProducts