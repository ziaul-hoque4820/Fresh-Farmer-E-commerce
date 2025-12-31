import React, { useState } from "react";
import { termsData } from "../data/terms-Privacy";

const TermsOfService = () => {
    const [activeId, setActiveId] = useState(null);

    const toggle = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="max-w-5xl mx-auto px-4 py-12 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Header */}
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-green-700 mb-3 dark:text-green-500">
                    Terms of Service
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto dark:text-white">
                    Please read these terms carefully before using the Fresh Farmer
                    platform.
                </p>
            </header>

            {/* Content */}
            <div className="space-y-4">
                {termsData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md dark:bg-gray-900 "
                    >
                        <button
                            onClick={() => toggle(item.id)}
                            className="w-full flex justify-between items-center px-6 py-4 text-left"
                        >
                            <span className="font-semibold text-gray-800 text-lg dark:text-white">
                                {item.title}
                            </span>
                            <span className="text-2xl text-green-600 cursor-pointer">
                                {activeId === item.id ? "−" : "+"}
                            </span>
                        </button>

                        {activeId === item.id && (
                            <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm dark:text-white">
                                {item.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 text-center mt-10">
                Last updated: {new Date().toLocaleDateString()}
            </p>
        </section>
    );
};

export default TermsOfService;
