import React from 'react'

function ProductCart({ product }) {
    // console.log(product);
    
    return (
        <div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
        >
            <div className="relative">
                <img
                    src={product.thumbnail}
                    alt={product.category}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                    <span
                        className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >{product.tags[0]}</span
                    >
                </div>
                <div className="absolute top-3 right-3">
                    <button
                        className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
                    >
                        <i
                            className="far fa-heart text-gray-600 dark:text-gray-400"
                        ></i>
                    </button>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h3
                        className="font-semibold text-gray-900 dark:text-white"
                    >
                        {product.slug}
                    </h3>
                    <div className="flex items-center text-yellow-400">
                        <i className="fas fa-star text-sm"></i>
                        <span
                            className="text-sm text-gray-600 dark:text-gray-400 ml-1"
                        >{product.rating.average}</span>
                    </div>
                </div>
                <p
                    className="text-sm text-gray-600 dark:text-gray-400 mb-3"
                >
                    {product.farmName}
                </p>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span
                            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
                        >৳{product.price} </span
                        >
                        <span
                            className="text-sm text-gray-500 dark:text-gray-400"
                        >/{product.stock.unit}</span
                        >
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Stock: {product.stock.quantity} {product.stock.unit}</span>
                </div>
                <button
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCart