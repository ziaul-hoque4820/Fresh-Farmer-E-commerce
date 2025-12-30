import React, { useState } from "react";

const TermsPrivacy = () => {
    const [activeTab, setActiveTab] = useState("terms");
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const termsData = [
        {
            title: "User Registration Requirement",
            content:
                "To purchase any product from the Frash Farmer application, users must complete the registration process by providing accurate and complete personal information including name, phone number, and delivery address. Orders may be canceled if incorrect or incomplete information is provided.",
        },
        {
            title: "Farmer Account Completion Policy",
            content:
                "Farmers must complete 100% of their profile before listing or selling products. This includes valid identification, farm location, contact details, and payment information. Incomplete farmer accounts will not be approved for selling.",
        },
        {
            title: "Product Quality & Seller Responsibility",
            content:
                "If a farmer delivers damaged, spoiled, or low-quality products, full responsibility lies with the seller. Frash Farmer reserves the right to suspend or permanently ban the farmer account if such issues occur.",
        },
        {
            title: "Orders & Payments",
            content:
                "All confirmed orders must be paid within the specified time. Any fraudulent activity or illegal transactions will result in immediate account termination.",
        },
        {
            title: "Admin Rights",
            content:
                "The Frash Farmer administration reserves full rights to review, suspend, or terminate any user or farmer account at any time for policy violations or security reasons.",
        },
    ];

    const privacyData = [
        {
            title: "Information Collection",
            content:
                "We collect personal and business-related information from users and farmers solely to provide and improve our services.",
        },
        {
            title: "Data Security",
            content:
                "Frash Farmer takes appropriate measures to protect user and farmer data. However, complete security over the internet cannot be guaranteed.",
        },
        {
            title: "Third-Party Data Sharing",
            content:
                "We do not share personal information with third parties unless required by law or legal authorities.",
        },
        {
            title: "Profile Information Updates",
            content:
                "Users and farmers can update their personal and account information at any time from their profile settings.",
        },
    ];

    const data = activeTab === "terms" ? termsData : privacyData;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
                Frash Farmer – Terms & Privacy Policy
            </h2>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <button
                    onClick={() => setActiveTab("terms")}
                    className={`px-6 py-2 font-semibold border rounded-l-lg transition
            ${activeTab === "terms"
                            ? "bg-green-600 text-white"
                            : "bg-white text-gray-700"
                        }`}
                >
                    Terms & Conditions
                </button>
                <button
                    onClick={() => setActiveTab("privacy")}
                    className={`px-6 py-2 font-semibold border rounded-r-lg transition
            ${activeTab === "privacy"
                            ? "bg-green-600 text-white"
                            : "bg-white text-gray-700"
                        }`}
                >
                    Privacy Policy
                </button>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="border rounded-lg bg-white shadow-sm">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full px-4 py-3 flex justify-between items-center text-left font-semibold text-gray-800"
                        >
                            {item.title}
                            <span className="text-xl">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TermsPrivacy;
