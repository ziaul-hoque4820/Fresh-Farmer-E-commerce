import React from 'react'
import logo from "../assets/seed-logo.png";

function Logo() {
    return (
        <div className="flex items-center space-x-3 cursor-pointer">
            <div className="bg-primary-500 p-2 rounded-lg">
                <img
                    src={logo}
                    alt="logo"
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                FarmFresh
            </h2>
        </div>
    )
}

export default Logo