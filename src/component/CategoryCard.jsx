import React from "react";

function CategoryCard({ title, items, icon, bg, hoverBg, iconColor, onClick }) {
    return (
        <div className="group cursor-pointer" onClick={onClick}>
            <div
                className={`
                    rounded-2xl p-6 text-center transition
                    ${bg} ${hoverBg}
                `}
            >
                <i className={`fas ${icon} text-3xl mb-3 ${iconColor}`}></i>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {items}
                </p>
            </div>
        </div>
    );
}

export default CategoryCard;
