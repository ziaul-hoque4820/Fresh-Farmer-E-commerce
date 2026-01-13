import React from 'react'
import Logo from '../component/Logo'
import { Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <div className='max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row dark:bg-gray-900 text-gray-900 dark:text-gray-100'>

                {/* Left Side - Form */}
                <div className='w-full p-4 md:p-12 flex flex-col justify-center'>
                    <div className="flex items-center gap-2 py-3">
                        <Logo />
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout