import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormFields = ({
    register,
    errors,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    bioLength,
    password
}) => {
    const validatePhone = (phone) => {
        const phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
        return phoneRegex.test(phone);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
                {/* First Name */}
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        First Name
                    </label>
                    <input
                        {...register("firstName", { required: "First name is required" })}
                        id="firstName"
                        type="text"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors?.firstName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                        placeholder="John"
                    />
                    {errors?.firstName && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.firstName.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                    </label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        id="email"
                        type="email"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors?.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                        placeholder="john@example.com"
                    />
                    {errors?.email && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.email.message}</p>
                    )}
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Address
                    </label>
                    <textarea
                        {...register("address", { required: "Address is required" })}
                        id="address"
                        rows="3"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none ${errors?.address ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                        placeholder="Enter your full address"
                    ></textarea>
                    {errors?.address && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.address.message}</p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors?.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                }`}
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('password')}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showPassword ? <FaEyeSlash className="text-gray-400 hover:text-gray-600" /> : <FaEye className="text-gray-400 hover:text-gray-600" />}
                        </button>
                    </div>
                    {errors?.password && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.password.message}</p>
                    )}
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
                {/* Last Name */}
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Last Name
                    </label>
                    <input
                        {...register("lastName", { required: "Last name is required" })}
                        id="lastName"
                        type="text"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors?.lastName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                        placeholder="Doe"
                    />
                    {errors?.lastName && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.lastName.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                    </label>
                    <input
                        {...register("phone", {
                            required: "Phone number is required",
                            validate: {
                                validPhone: (value) => validatePhone(value) || "Invalid Bangladeshi phone number"
                            }
                        })}
                        id="phone"
                        type="tel"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors?.phone ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                        placeholder="+880 1234 567890"
                    />
                    {errors?.phone && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.phone.message}</p>
                    )}
                </div>

                {/* Bio - FIXED: Bio data capture */}
                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Bio
                        <span className="text-gray-400 text-xs font-normal ml-1">(Optional)</span>
                    </label>
                    <textarea
                        {...register("bio", {
                            maxLength: {
                                value: 250,
                                message: "Bio must be less than 250 characters"
                            },
                            onChange: (e) => bioLength && bioLength[1](e.target.value.length)
                        })}
                        id="bio"
                        rows="3"
                        maxLength="250"
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none ${errors?.bio ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                            }`}
                        placeholder="Tell us about yourself..."
                    ></textarea>
                    <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Brief description</p>
                        <span id="bioCounter" className="text-xs text-gray-400">
                            {bioLength && bioLength[0]}/250
                        </span>
                    </div>
                    {errors?.bio && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.bio.message}</p>
                    )}
                </div>

                {/* Confirm Password */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: value => value === password || "Passwords do not match"
                            })}
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            className={`w-full px-3 py-2 pr-10 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${errors?.confirmPassword ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                                }`}
                            placeholder="••••••••"
                        />
                        <button
                            type="button"
                            onClick={() => togglePasswordVisibility('confirmPassword')}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showConfirmPassword ? <FaEyeSlash className="text-gray-400 hover:text-gray-600" /> : <FaEye className="text-gray-400 hover:text-gray-600" />}
                        </button>
                    </div>
                    {errors?.confirmPassword && (
                        <p className="text-sm italic mt-1 text-red-500">{errors.confirmPassword.message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FormFields;