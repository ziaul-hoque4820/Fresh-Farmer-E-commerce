import React from 'react'
import logo from "../assets/seed-logo.png";
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <NavLink to={'/'} className="flex items-center space-x-3 cursor-pointer">
            <div className="bg-primary-100 p-2 rounded-lg">
                <img
                    src={logo}
                    alt="logo"
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
            </div>
            <div>
                <h3 className="text-xl font-bold dark:text-white">FarmFresh</h3>
                <p className="text-sm text-gray-400">
                    Local Farmer Booking
                </p>
            </div>
        </NavLink>
    )
}

export default Logo