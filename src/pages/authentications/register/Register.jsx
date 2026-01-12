import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ProfileUpload from './ProfileUpload';
import FormFields from './FormFields';
import SocialLogin from './SocialLogin';

function Register() {
    const [err, setErr] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [bioLength, setBioLength] = useState(0);


    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("password");

    const handleGoogleRegister = () => {

    };

    const onSubmit = (data) => {
        console.log("Form Data:", data);

    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

    };

    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <div className='py-12 px-4 sm:px-6 lg:px-8'>
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-6">
                            <div className="bg-primary-500 p-3 rounded-full">
                                <i className="fas fa-seedling text-white text-2xl"></i>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Create your account
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Join FarmFresh community today
                        </p>
                    </div>

                    {/* Registration Form */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 py-8 px-8 shadow-xl rounded-2xl">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Profile Upload */}
                                <ProfileUpload
                                    profilePic={profilePic}
                                    handleImageChange={handleImageChange}
                                    errors={errors}
                                    register={register}
                                />

                                {/* Form Fields */}
                                <FormFields
                                    register={register}
                                    errors={errors}
                                    showPassword={showPassword}
                                    showConfirmPassword={showConfirmPassword}
                                    togglePasswordVisibility={togglePasswordVisibility}
                                    bioLength={[bioLength, setBioLength]} 
                                    password={password}
                                />

                                {/* Terms and Conditions */}
                                <div className="flex items-start">
                                    <input
                                        {...register("terms", {
                                            required: "You must accept the terms and conditions"
                                        })}
                                        id="terms"
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                        I agree to the
                                        <Link to="/termsPrivacy" className="text-primary-600 hover:text-primary-500 mx-2">
                                            Terms and Conditions
                                        </Link>
                                        and
                                        <Link to="/termsPrivacy" className="text-primary-600 hover:text-primary-500 mx-2">
                                            Privacy Policy
                                        </Link>
                                    </label>
                                    {errors?.terms && (
                                        <p className="text-sm italic mt-1 text-red-500 block w-full">
                                            {errors.terms.message}
                                        </p>
                                    )}
                                </div>

                                {/* Global Error */}
                                {err && (
                                    <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                                        <p className="text-sm text-red-600 dark:text-red-400 text-center">{err}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200 transform hover:scale-105"
                                >
                                    Create Account
                                </button>

                                {/* Social Login */}
                                <SocialLogin handleGoogleRegister={handleGoogleRegister} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;