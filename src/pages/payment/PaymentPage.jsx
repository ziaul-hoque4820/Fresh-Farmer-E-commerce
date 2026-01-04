import React from 'react'
import { Link } from 'react-router-dom'

function PaymentPage() {
    return (
        <div>
            {/* Breadcrumb  */}
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="flex items-center space-x-2 text-sm">
                        <li>
                            <Link
                                to="/"
                                class="text-gray-500 hover:text-primary-600"
                            >Home</Link>
                        </li>
                        <li>
                            <i
                                class="fas fa-chevron-right text-gray-400 text-xs"
                            ></i>
                        </li>
                        <li>
                            <Link
                                to="/product-details"
                                class="text-gray-500 hover:text-primary-600"
                            >Product Details</Link>
                        </li>
                        <li>
                            <i
                                class="fas fa-chevron-right text-gray-400 text-xs"
                            ></i>
                        </li>
                        <li class="text-gray-900 dark:text-white">Payment</li>
                    </ol>
                </nav>
            </div>

             {/* Payment Process */}
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                </div>
            </div>
        </div>
    )
}

export default PaymentPage