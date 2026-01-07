import React from 'react'

function PaymentSuccess() {
    return (
        <section className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Success Icon and Message  */}
                <div className="text-center mb-12">
                    <div
                        className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                        <i className="fas fa-check text-4xl text-green-600 dark:text-green-400"></i>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Payment Successful!
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                        Thank you for your order
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                        Order #FB-2024-001234
                    </p>
                </div>

                {/* Email Confirmation Notice  */}
                <div className="mt-8 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <div className="flex items-center">
                        <i className="fas fa-envelope text-blue-600 dark:text-blue-400 mr-3"></i>
                        <div>
                            <p className="font-medium text-blue-900 dark:text-blue-100">
                                Email Confirmation Sent
                            </p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                                We've sent your order confirmation and receipt to
                                your email address.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Order Details  */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
                    {/* Order Summary */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Order Details
                        </h2>

                        {/* Product  */}
                        <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=80&h=80&fit=crop"
                                alt="Fresh Tomatoes" className="w-16 h-16 rounded-lg object-cover" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Fresh Tomatoes
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    By Rahim's Farm
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Quantity: 5 kg
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-gray-900 dark:text-white">
                                    ৳225
                                </p>
                            </div>
                        </div>

                        {/* Delivery Information  */}
                        <div className="space-y-3 mb-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                                Delivery Information
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Delivery Date:</span>
                                    <span className="text-gray-900 dark:text-white">Dec 22, 2024</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Delivery Time:</span>
                                    <span className="text-gray-900 dark:text-white">10:00 AM - 12:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Address:</span>
                                    <span className="text-gray-900 dark:text-white text-right">123 Main St, Dhaka 1000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default PaymentSuccess