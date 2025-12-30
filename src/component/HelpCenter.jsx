import React, { useState } from "react";

const HelpCenter = () => {
    const [activeCategory, setActiveCategory] = useState("orders");
    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        { id: "orders", label: "Orders & Delivery" },
        { id: "account", label: "Account & Profile" },
        { id: "payments", label: "Payments & Refunds" },
        { id: "farmers", label: "Farmer Guidelines" },
    ];

    const faqs = {
        orders: [
            {
                q: "How do I place an order?",
                a: "You must register and complete your profile before placing an order. Select products, add to cart, and confirm checkout."
            },
            {
                q: "What if my order is delayed?",
                a: "Delivery time depends on location and farmer availability. If delayed, please contact support."
            },
        ],
        account: [
            {
                q: "Is registration mandatory?",
                a: "Yes. Registration with valid personal information is required to purchase products."
            },
            {
                q: "Can I update my profile later?",
                a: "Yes. You can update your profile information anytime from account settings."
            },
        ],
        payments: [
            {
                q: "What payment methods are supported?",
                a: "We support mobile banking, cards, and other available digital payment options."
            },
            {
                q: "How does refund work?",
                a: "Refunds are processed after verification if the product quality does not meet our standards."
            },
        ],
        farmers: [
            {
                q: "Do farmers need full profile completion?",
                a: "Yes. Farmers must complete 100% of their profile before selling products."
            },
            {
                q: "Who is responsible for damaged products?",
                a: "The farmer is fully responsible for any spoiled or damaged products delivered."
            },
        ],
    };

    const currentFaqs = faqs[activeCategory];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-green-700 mb-3 dark:text-green-500">
                    Help Center
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-50">
                    Find answers to common questions or learn how Frash Farmer works.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
                {/* Sidebar */}
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 dark:border-[1px] dark:border-green-600">
                    <h3 className="font-semibold text-gray-800 mb-4 dark:text-gray-50">
                        Help Categories
                    </h3>
                    <ul className="space-y-2 dark:text-gray-50">
                        {categories.map((cat) => (
                            <li key={cat.id}>
                                <button
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setOpenIndex(null);
                                    }}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition  dark:text-gray-50
                    ${activeCategory === cat.id
                                            ? "bg-green-600 text-white"
                                            : "hover:bg-green-50 hover:text-gray-900 text-gray-700"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="lg:col-span-3 space-y-4">
                    {currentFaqs.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800"
                            >
                                {item.q}
                                <span className="text-xl">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* CTA */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Still need help?
                        </h4>
                        <p className="text-gray-600 mb-4">
                            If you couldn't find the answer you're looking for, feel free to contact our support team.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
