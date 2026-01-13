import React from 'react'

function FarmerCTA() {
    return (
        <div className="bg-primary-600 text-white py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1538826051293-02b4da7acc5f?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Want to Join Our Farmer Community?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                    Share your fresh produce with thousands of customers and
                    grow your business
                </p>
                <a
                    href="register.html"
                    className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                    Join as Farmer
                </a>
            </div>
        </div>
    )
}

export default FarmerCTA