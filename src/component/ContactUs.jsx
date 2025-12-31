import React from "react";

const ContactUs = () => {
    return (
        <section className="dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-12 ">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-green-700 mb-3 dark:text-green-500">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-50">
                        We're here to help. Reach out to us for support, feedback, or emergency assistance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="bg-white shadow-md rounded-xl p-6 space-y-4 dark:bg-gray-900 dark:border-[1px] dark:border-green-600">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">
                            Support Information
                        </h3>

                        <p className="text-gray-600 dark:text-gray-50">
                            <strong>Email:</strong> support@frashfarmer.com
                        </p>
                        <p className="text-gray-600 dark:text-gray-50">
                            <strong>Phone:</strong> +880-XXX-XXXXXX
                        </p>
                        <p className="text-gray-600 dark:text-gray-50">
                            <strong>Phone:</strong> +880-XXX-XXXXXX
                        </p>
                        <p className="text-gray-600 dark:text-gray-50">
                            <strong>Emergency Support:</strong> Available 24/7 for delivery and product issues
                        </p>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                            <p className="text-sm text-gray-700">
                                For urgent delivery issues or damaged products, please contact us immediately.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="bg-white shadow-md rounded-xl p-6 space-y-4 dark:bg-gray-900 dark:border-[1px] dark:border-green-600">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50">
                            Send us a message
                        </h3>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none dark:text-gray-50"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none dark:text-gray-50"
                        />

                        <textarea
                            rows="4"
                            placeholder="Describe your issue"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none dark:text-gray-50"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
