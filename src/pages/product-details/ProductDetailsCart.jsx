import React from 'react'
import { useState } from 'react';
import { useCart } from '../../context/cartContext/CartProvider';

function ProductDetailsCart({ product }) {
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product.id, quantity)
    }

    const increaseQty = () => {
        if (quantity < product.stock.quantity) {
            setQuantity(prev => prev + 1);
        }
    };

    const decreaseQty = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images  */}
                <div className="space-y-4">
                    <div className="aspect-square bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                        <img id="mainImage"
                            src={product?.thumbnail}
                            alt={product?.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Thumbnail Images  */}
                    <div className="grid grid-cols-5 gap-2">
                        {product.images.map((img, index) => (
                            <button
                                key={index}
                                className="aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary-500"
                            >
                                <img
                                    src={img}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Information  */}
                <div className="space-y-6">
                    {/* Product Header */}
                    <div>
                        <div className="flex items-center space-x-2 mb-2">
                            {product.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`${tag === "Organic" ? "bg-green-100" : "bg-red-100"}  dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {product.name}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Produced by
                            <span className="font-semibold text-primary-600 dark:text-primary-400 ml-2">{product.farmer.farmName}</span>
                        </p>
                    </div>

                    {/* Rating and Reviews  */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <div className="flex text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">{product.rating.average}</span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-400">({product.rating.totalReviews} reviews)</span>
                        <button className="text-primary-600 dark:text-primary-400 hover:underline">
                            Write a review
                        </button>
                    </div>

                    {/* Price and Stock  */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">৳45</span>
                                <span className="text-lg text-gray-500 dark:text-gray-400">/kg</span>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Available Stock
                                </p>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {product.price} {product.unit}
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            <span>{product.farmer.location}</span>
                        </div>
                    </div>

                    {/* Quantity and Date Selection */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Quantity
                                (kg)</label>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={decreaseQty}
                                    className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <i className="fas fa-minus text-sm"></i>
                                </button>
                                <input type="number" value={quantity} min="1" max={product.stock.quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    className="w-20 text-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white" />
                                <button
                                    onClick={increaseQty}
                                    className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <i className="fas fa-plus text-sm"></i>
                                </button>
                            </div>
                        </div>


                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg">
                            <i className="fas fa-bolt mr-2"></i>
                            Buy Now
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium transition">
                            <i className="fas fa-shopping-cart mr-2"></i>
                            Add to Cart
                        </button>
                        <button
                            className="w-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium transition">
                            <i className="far fa-heart mr-2"></i>
                            Add to Favorite
                        </button>
                    </div>

                    {/* Farmer Contact */}
                    <div className="bg-primary-50 dark:bg-primary-900 rounded-xl p-4">
                        <div className="flex items-center space-x-3">
                            <img src="https://images.unsplash.com/photo-10007003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                                alt="Rahim" className="w-12 h-12 rounded-full" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                    {product.farmer.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Farmer since {product.createdAt}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsCart