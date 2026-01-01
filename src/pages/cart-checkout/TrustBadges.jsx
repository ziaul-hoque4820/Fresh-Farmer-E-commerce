import { RefreshCw, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'

function TrustBadges() {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-3">
                <Truck className="w-8 h-8 text-green-500" />
                <div>
                    <p className="font-medium text-gray-900 dark:text-white">Free Delivery</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Over 500 BDT</p>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-3">
                <RefreshCw className="w-8 h-8 text-green-500" />
                <div>
                    <p className="font-medium text-gray-900 dark:text-white">Easy Returns</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">7-day guarantee</p>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                <div>
                    <p className="font-medium text-gray-900 dark:text-white">Farmer Verified</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Direct from farms</p>
                </div>
            </div>
        </div>
    )
}

export default TrustBadges