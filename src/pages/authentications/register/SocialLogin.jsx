import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SocialLogin = ({ handleGoogleRegister }) => {
    return (
        <>
            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        Or continue with
                    </span>
                </div>
            </div>

            {/* Social Login */}
            <button
                type="button"
                onClick={handleGoogleRegister}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-200 flex items-center justify-center space-x-2"
            >
                <FcGoogle />
                <span>Continue with Google</span>
            </button>

            {/* Login Link */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <Link to="/login" className="text-primary-600 hover:text-primary-500 font-medium ml-2">
                        Log in
                    </Link>
                </p>
            </div>
        </>
    );
};

export default SocialLogin;