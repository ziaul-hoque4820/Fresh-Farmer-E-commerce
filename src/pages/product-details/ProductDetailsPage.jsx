import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetailsCart from './ProductDetailsCart'

function ProductDetailsPage() {
    return (
        <section className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            {/* Breadcrumb  */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
                        </li>
                        <li>
                            <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
                        </li>
                        <li>
                            <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
                        </li>
                        <li>
                            <i className="fas fa-chevron-right text-gray-400 text-xs"></i>
                        </li>
                        <li className="text-gray-900 dark:text-white">
                            Fresh Tomatoes
                        </li>
                    </ol>
                </nav>
            </div>

            {/* Product Details  */}
            <ProductDetailsCart />
        </section>
    )
}

export default ProductDetailsPage