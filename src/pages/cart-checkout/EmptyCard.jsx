import { ArrowLeft, ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCard() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                        <ShoppingBag className="w-12 h-12 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                        Add fresh products from our farmers to get started!
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300"
                    >
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Browse Products
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCard