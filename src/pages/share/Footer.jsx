import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../component/Logo'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <Logo />
                        </div>
                        <p className="text-gray-400 mb-4">
                            Connecting communities with fresh, local produce
                            directly from farmers.
                        </p>
                        <div className="flex space-x-4">
                            <NavLink to="#" className="text-gray-400 hover:text-blue-400 text-2xl"
                            ><i className="fab fa-facebook"></i
                            ></NavLink>
                            <NavLink to="#" className="text-gray-400 hover:text-sky-400 text-2xl"
                            ><i className="fab fa-twitter"></i
                            ></NavLink>
                            <NavLink to="#" className="text-gray-400 hover:text-rose-400 text-2xl"
                            ><i className="fab fa-instagram"></i
                            ></NavLink>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <NavLink to="/" className="hover:text-white">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="hover:text-white"
                                >Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/farmers" className="hover:text-white"
                                >Farmers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="hover:text-white"
                                >About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">For Farmers</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <NavLink to="/register" className="hover:text-white"
                                >Join as Farmer
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/create" className="hover:text-white"
                                >Add Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/manage-list"
                                    className="hover:text-white"
                                >Manage Listings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/help-center" className="hover:text-white"
                                >Farmer Support
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <NavLink to="/help-center" className="hover:text-white"
                                >Help Center
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="hover:text-white"
                                >Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms-service" className="hover:text-white"
                                >Terms of Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/policy" className="hover:text-white"
                                >Privacy Policy
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
                >
                    <p>
                        &copy; {new Date().getFullYear()} FarmFresh - Local Farmer Booking. All rights
                        reserved by Fresh Farmer.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer