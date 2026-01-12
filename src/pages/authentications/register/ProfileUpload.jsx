import React from 'react';
import { IoMdCamera } from 'react-icons/io';

const ProfileUpload = ({ profilePic, handleImageChange, register, errors }) => {
    const defaultPlaceholder = "data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100' height='100' fill='%23e5e7eb'/%3e%3ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' alignment-baseline='middle' fill='%236b7280'%3ePhoto%3c/text%3e%3c/svg%3e";

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Profile Picture
            </label>
            <div className="flex items-center justify-center space-x-6">
                <div className="shrink-0">
                    <img
                        className="h-20 w-20 object-cover rounded-full border-2 border-gray-300 dark:border-gray-600"
                        src={profilePic || defaultPlaceholder}
                        alt="Profile preview"
                    />
                </div>
                <div className="flex-1 max-w-xs">
                    <label
                        htmlFor="profilePicture"
                        className="relative cursor-pointer bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition block text-center"
                    >
                        <span className="flex items-center justify-center">
                            <IoMdCamera className="mr-2" />
                            Choose photo
                        </span>
                        <input
                            id="profilePicture"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            {...register("profilePicture", {
                                required: "Profile picture is required"
                            })}
                            onChange={handleImageChange}
                        />
                    </label>
                    {errors?.profilePicture && (
                        <p className="text-sm italic mt-2 text-red-500 text-center">
                            {errors.profilePicture.message}
                        </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
                        PNG, JPG, GIF up to 2MB
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpload;