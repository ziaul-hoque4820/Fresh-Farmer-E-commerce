import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaChevronDown, FaMoon, FaSun, FaSearch, FaUser, FaSignOutAlt, } from "react-icons/fa";
import Logo from "../../component/Logo";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(
        document.documentElement.classList.contains("dark")
    );
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState("Home");

    const userDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    /* Close dropdown / mobile menu when clicking outside */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                userDropdownRef.current &&
                !userDropdownRef.current.contains(e.target)
            ) {
                setUserDropdownOpen(false);
            }

            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target) &&
                !e.target.closest('[aria-label="Toggle menu"]')
            ) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDark = () => {
        document.documentElement.classList.toggle("dark");
        setDark(!dark);
    };

    const navItems = [
        { id: "/", label: "Home" },
        { id: "/products", label: "Products" },
        { id: "/farmers", label: "Farmers" },
        { id: "/about", label: "About" },
    ];

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={`/${item.id}`}
                                onClick={() => setActiveNavItem(item.label)}
                                className={`relative px-1 py-2 ${activeNavItem === item.label
                                    ? "text-primary-600 dark:text-primary-400 font-semibold"
                                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                    }`}
                            >
                                {item.label}
                                {activeNavItem === item.label && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500" />
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Cart */}
                        <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                            <FaShoppingCart className="text-xl" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* User Dropdown */}
                        <div
                            ref={userDropdownRef}
                            className="hidden sm:flex items-center space-x-2 relative"
                        >
                            <button
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                                    className="w-8 h-8 rounded-full"
                                    alt="user"
                                />
                                <span>John Doe</span>
                                <FaChevronDown className="text-sm  cursor-pointer" />
                            </button>

                            {userDropdownOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                                    <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            John Doe
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            john@example.com
                                        </p>
                                    </div>

                                    <button className="w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2  cursor-pointer">
                                        <FaUser className="text-sm" />
                                        <span>Profile</span>
                                    </button>

                                    <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center space-x-2  cursor-pointer">
                                        <FaSignOutAlt className="text-sm" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Dark Mode */}
                        <button
                            onClick={toggleDark}
                            className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400  cursor-pointer"
                        >
                            {dark ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 text-gray-700 dark:text-gray-300 cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={mobileMenuRef}
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col space-y-4 py-4 border-t border-gray-200 dark:border-gray-700">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={`/${item.id}`}
                                onClick={() => {
                                    setActiveNavItem(item.label);
                                    setMenuOpen(false);
                                }}
                                className={`px-4 py-2 ${activeNavItem === item.label
                                    ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-gray-700 rounded-lg border-l-4 border-primary-500"
                                    : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                    }`}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
