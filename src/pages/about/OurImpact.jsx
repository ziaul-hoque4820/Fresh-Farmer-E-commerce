import React from 'react'
import Counter from '../../component/Counter'

function OurImpact() {
    return (
        <div className="bg-primary-600 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
                    <p className="text-xl text-primary-100">
                        Making a difference in communities across Bangladesh
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                            <Counter end={500} suffix="+" />
                        </div>
                        <div className="text-primary-200">Active Farmers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                            <Counter end={10000} suffix="+" />
                        </div>
                        <div className="text-primary-200">Happy Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                            <Counter end={50} suffix="+" />
                        </div>
                        <div className="text-primary-200">Districts Covered</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                            <Counter end={2000} suffix="+" />
                        </div>
                        <div className="text-primary-200">Products Available</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurImpact