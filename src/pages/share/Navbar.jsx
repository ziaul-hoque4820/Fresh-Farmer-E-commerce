import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaChevronDown, FaMoon, FaSun, FaUser, FaSignOutAlt, FaChartBar, } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../component/Logo";
import useAuth from "../../hooks/useAuth";

function Navbar() {
    const { user, signOutUser } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [dark, setDark] = useState(
        document.documentElement.classList.contains("dark")
    );

    const mobileMenuRef = useRef(null);
    const userDropdownRef = useRef(null);

    /* -------- Outside Click -------- */
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

    /* -------- Theme -------- */
    const toggleDark = () => {
        document.documentElement.classList.toggle("dark");
        setDark((prev) => !prev);
    };

    /* -------- Logout -------- */
    const handleLogout = async () => {
        await signOutUser();
        setUserDropdownOpen(false);
        setMenuOpen(false);
    };

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/products", label: "Products" },
        { path: "/farmers", label: "Farmers" },
        { path: "/about", label: "About" },
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
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative px-1 py-2 ${isActive
                                        ? "text-primary-600 dark:text-primary-400 font-semibold"
                                        : "text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-3">

                        {/* Cart (Visible on all devices) */}
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                        >
                            <FaShoppingCart className="text-xl" />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </Link>

                        {/* Theme Toggle (Before Login) */}
                        <button
                            onClick={toggleDark}
                            className="p-2 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                        >
                            {dark ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* Desktop Auth */}
                        <div className="hidden lg:block">
                            {user ? (
                                <div ref={userDropdownRef} className="relative">
                                    <button
                                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                        className="flex items-center space-x-2 text-gray-700 dark:text-white"
                                    >
                                        <img
                                            src={user.photoURL || "/default-user.png"}
                                            className="w-8 h-8 rounded-full"
                                            alt="user"
                                        />
                                        <span>{user.displayName || "User"}</span>
                                        <FaChevronDown />
                                    </button>

                                    {userDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border py-2">
                                            <div className="px-4 py-3 border-b">
                                                <p className="text-sm font-medium dark:text-white">
                                                    {user.displayName}
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {user.email}
                                                </p>
                                            </div>

                                            <Link
                                                to="/dashboard"
                                                className="flex px-4 py-2 items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                            >
                                                <FaChartBar />
                                                <span>Dashboard</span>
                                            </Link>
                                            <Link
                                                to="/profile"
                                                className="flex px-4 py-2 items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                                            >
                                                <FaUser />
                                                <span>Profile</span>
                                            </Link>

                                            <button
                                                onClick={handleLogout}
                                                className="flex w-full px-4 py-2 items-center space-x-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer"
                                            >
                                                <FaSignOutAlt />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
                                >
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 text-gray-700 dark:text-white"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className={`lg:hidden transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <div className="flex flex-col space-y-4 py-4 border-t border-gray-200 dark:border-gray-700 px-4">

                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:bg-green-50 dark:hover:bg-gray-700 px-2 py-2"
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    {user ? (
                        <div className="w-48 dark:bg-gray-800py-2">
                            <div className="px-4 py-3 border-b">
                                <p className="text-sm font-medium dark:text-white">
                                    {user.displayName}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {user.email}
                                </p>
                            </div>

                            <Link
                                to="/dashboard"
                                className="flex px-4 py-2 items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                            >
                                <FaChartBar />
                                <span>Dashboard</span>
                            </Link>
                            <Link
                                to="/profile"
                                className="flex px-4 py-2 items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                            >
                                <FaUser />
                                <span>Profile</span>
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="flex w-full px-4 py-2 items-center space-x-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer"
                            >
                                <FaSignOutAlt />
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 w-fit"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
