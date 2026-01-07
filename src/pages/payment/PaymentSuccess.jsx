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

                 
            </div>
        </section>
    )
}

export default PaymentSuccess