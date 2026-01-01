import { ArrowLeft, ShoppingBag, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function OrderSummary({ promoCode, shippingFee, setPromoCode, handleApplyPromo, appliedPromo, setAppliedPromo, subtotal, discount, tax, total, handleCheckout }) {
    return (
        <div className="lg:w-1/3 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm sticky top-8">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Order Summary</h2>
                </div>

                <div className="p-6">
                    {/* Promo Code */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                            Promo Code
                        </label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                placeholder="Enter promo code"
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                            <button
                                onClick={handleApplyPromo}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-150"
                            >
                                Apply
                            </button>
                        </div>
                        {appliedPromo && (
                            <div className="mt-2 flex items-center justify-between text-green-600 dark:text-green-400">
                                <span className="text-sm">Promo applied: {appliedPromo.code}</span>
                                <button
                                    onClick={() => setAppliedPromo(null)}
                                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                            <span className="font-medium text-gray-900 dark:text-white">{subtotal.toFixed(0)} BDT</span>
                        </div>

                        {discount > 0 && (
                            <div className="flex justify-between text-green-600 dark:text-green-400">
                                <span>Discount</span>
                                <span>-{discount.toFixed(0)} BDT</span>
                            </div>
                        )}

                        <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Delivery</span>
                            <span className={shippingFee === 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}>
                                {shippingFee === 0 ? 'FREE' : `${shippingFee} BDT`}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">VAT (5%)</span>
                            <span className="text-gray-900 dark:text-white">{tax.toFixed(0)} BDT</span>
                        </div>

                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div className="flex justify-between text-lg font-bold">
                                <span className="text-gray-900 dark:text-white">Total</span>
                                <span className="text-green-600 dark:text-green-400">{total.toFixed(0)} BDT</span>
                            </div>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button
                        onClick={handleCheckout}
                        className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Proceed to Checkout
                    </button>

                    {/* Payment Methods */}
                    <div className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 text-center">We Accept</p>
                        <div className="flex justify-center space-x-3">
                            <div className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">
                                <span className="text-xs font-medium text-gray-900 dark:text-white">bKash</span>
                            </div>
                            <div className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">
                                <span className="text-xs font-medium text-gray-900 dark:text-white">Nagad</span>
                            </div>
                            <div className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-700">
                                <span className="text-xs font-medium text-gray-900 dark:text-white">Card</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6 text-center">
                <Link
                    to="/products"
                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default OrderSummary