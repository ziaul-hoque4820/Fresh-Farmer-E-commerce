import React from 'react'
import Logo from '../component/Logo'
import { Link, Outlet } from 'react-router-dom'

function AuthLayout() {
    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
            <div className='max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row'>

                {/* Left Side - Form */}
                <div className='w-full p-8 md:p-12 flex flex-col justify-center'>
                    <Link to={'/'} className="flex items-center gap-2 py-3">
                        <Logo />
                    </Link>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout