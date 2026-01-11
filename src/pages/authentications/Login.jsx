import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'

import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <div
                className="min-h-screen flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-md w-full space-y-8">
                    {/* Header  */}
                    <div className="text-center">
                        <h2
                            className="text-3xl font-bold text-gray-900 dark:text-white"
                        >
                            Welcome back
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Log in to your FarmFresh account
                        </p>
                    </div>

                    {/* Login Form  */}
                    <div
                        className="bg-white dark:bg-gray-800 py-8 px-6 shadow-xl rounded-2xl"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        {
                                        ...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Invalid email address"
                                            },
                                        })
                                        }
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={`w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors.email ? 'border-red-500' : ''}`}
                                        placeholder="john@example.com"
                                    />
                                    <i
                                        className="fas fa-envelope absolute left-3 top-3.5 text-gray-400"
                                    ></i>
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        {
                                        ...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters long'
                                            },
                                        })
                                        }
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="••••••••"
                                    />
                                    <i
                                        className="fas fa-lock absolute left-3 top-3.5 text-gray-400"
                                    ></i>
                                    <button
                                        onClick={togglePasswordVisibility}
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                    >
                                        {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-sm mt-1 text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link to={'/forgot-password'}
                                    className="text-sm text-primary-600 hover:text-primary-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-105"
                            >
                                Log In
                            </button>

                            {/* Divider  */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div
                                        className="w-full border-t border-gray-300 dark:border-gray-600"
                                    ></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span
                                        className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                                    >Or continue with</span>
                                </div>
                            </div>

                            {/* Social Login  */}
                            <button
                                type="button"
                                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200 flex items-center justify-center space-x-2"
                            >
                                <i className="fab fa-google text-red-500"></i>
                                <span>Continue with Google</span>
                            </button>
                        </form>

                        {/* Register Link  */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Don't have an account?
                                <NavLink
                                    to="/register"
                                    className="text-primary-600 hover:text-primary-500 font-medium ml-2"
                                >Create account
                                </NavLink>
                            </p>
                        </div>
                    </div>
                    {/* Demo Accounts  */}
                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                        <h3
                            className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2"
                        >
                            Demo Accounts:
                        </h3>
                        <div
                            className="text-xs text-blue-700 dark:text-blue-300 space-y-1"
                        >
                            <div>
                                <strong>Customer:</strong> customer@demo.com /
                                password123
                            </div>
                            <div>
                                <strong>Farmer:</strong> farmer@demo.com /
                                password123
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login