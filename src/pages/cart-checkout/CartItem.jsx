import { Award, Leaf, Minus, Plus, Star, Tag, Trash2 } from 'lucide-react'
import React from 'react'

function CartItem({ item, removeItem, updateQuantity, calculateItemTotal }) {
    
    return (
        <div className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
            <div className="flex flex-col sm:flex-row sm:items-center">
                {/* Product Image */}
                <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 mb-4 sm:mb-0 relative">
                    <img
                        src={item.thumbnail || item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    {item.discount.isDiscounted && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
                            <Tag className="w-3 h-3 mr-1" />
                            SAVE {item.price - item.discount.discountPrice} BDT
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="flex-1 sm:ml-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                                {item.isOrganic && (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 flex items-center gap-1">
                                        <Leaf className="w-3 h-3" />
                                        Organic
                                    </span>
                                )}
                                {item.isCertified && (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 flex items-center gap-1">
                                        <Award className="w-3 h-3" />
                                        Certified
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                By {item.farmer.farmName} • {item.farmer.location}
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                    <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">{item.rating.average}</span>
                                    <span className="mx-1 text-sm text-gray-500 dark:text-gray-400">•</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.rating.totalReviews} reviews</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 hover:bg-red-50 dark:hover:bg-gray-700 rounded-full transition duration-150"
                            aria-label="Remove item"
                        >
                            <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-500 dark:hover:text-red-400" />
                        </button>
                    </div>

                    {/* Price and Quantity */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                                <button

                                    onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg transition duration-150 dark:text-white"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 w-16 text-center font-medium text-gray-900 dark:text-white">
                                    {item.cartQuantity} {item.unit}
                                </span>
                                <button
                                    onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg transition duration-150 dark:text-white"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                {calculateItemTotal(item).toFixed(0)} {item.currency}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end gap-2">
                                {item.discount.isDiscounted ? (
                                    <>
                                        <span className="line-through text-gray-500 dark:text-gray-400">
                                            {item.price * item.cartQuantity} {item.currency}
                                        </span>
                                        <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                            {item.discount.discountPrice} {item.currency}/{item.unit}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-lg font-bold text-green-600 dark:text-green-400">
                                        {item.price} {item.currency}/{item.unit}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Price per {item.unit}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem