import React from 'react'

function Newsletter() {
    return (
        <section className="py-16 bg-primary-600 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1767590954924-9ff1057b9f65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-primary-100 mb-8">
                    Get notified about new farmers, seasonal produce, and
                    special offers
                </p>

                <div className="flex max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white dark:bg-gray-200"
                    />
                    <button
                        className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-3 rounded-r-lg font-medium transition cursor-pointer"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter