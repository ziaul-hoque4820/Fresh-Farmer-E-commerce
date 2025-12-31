// Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingCart,
    Trash2,
    Plus,
    Minus,
    ShoppingBag,
    ArrowLeft,
    Truck,
    ShieldCheck,
    RefreshCw,
    Leaf,
    Award,
    Star,
    Tag,
    X
} from 'lucide-react';

const Cart = () => {
    // Cart state with your product structure
    const [cartItems, setCartItems] = useState([
        {
            id: "prod_002",
            name: "Organic Potatoes",
            description: "Naturally grown potatoes with rich taste and texture.",
            images: ["https://images.unsplash.com/photo-1582515073490-dc84c8f76c8d?w=400&h=300&fit=crop"],
            thumbnail: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop",
            category: "Vegetables",
            tags: ["Organic", "Root"],
            farmer: {
                name: "Shumi Rahman",
                farmName: "Shumi Agro",
                location: "Rangpur, Bangladesh",
            },
            price: 38,
            currency: "BDT",
            unit: "kg",
            discount: { isDiscounted: true, discountPrice: 34 },
            stock: { quantity: 80, unit: "kg", inStock: true },
            rating: { average: 4.7, totalReviews: 98 },
            isOrganic: true,
            isCertified: true,
            cartQuantity: 2
        },
        {
            id: "prod_003",
            name: "Fresh Strawberries",
            description: "Sweet and juicy strawberries from our organic farm.",
            thumbnail: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
            category: "Fruits",
            tags: ["Organic", "Seasonal"],
            farmer: {
                name: "Mohammad Ali",
                farmName: "Green Valley Farms",
                location: "Dhaka, Bangladesh",
            },
            price: 120,
            currency: "BDT",
            unit: "kg",
            discount: { isDiscounted: false, discountPrice: null },
            stock: { quantity: 50, unit: "kg", inStock: true },
            rating: { average: 4.8, totalReviews: 156 },
            isOrganic: true,
            isCertified: true,
            cartQuantity: 1
        }
    ]);

    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(null);

    // Calculate totals
    const calculateItemTotal = (item) => {
        const price = item.discount.isDiscounted ? item.discount.discountPrice : item.price;
        return price * item.cartQuantity;
    };

    const subtotal = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);
    const shippingFee = subtotal > 500 ? 0 : 50;
    const tax = subtotal * 0.05;
    const discount = appliedPromo ? subtotal * 0.1 : 0;
    const total = subtotal + shippingFee + tax - discount;

    // Update quantity
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) {
            removeItem(id);
            return;
        }

        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, cartQuantity: newQuantity } : item
            )
        );
    };

    // Remove item
    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    // Apply promo
    const handleApplyPromo = () => {
        if (!promoCode.trim()) return;

        if (promoCode.toUpperCase() === 'FRESH10') {
            setAppliedPromo({
                code: 'FRESH10',
                discount: '10% OFF'
            });
        } else {
            alert('Invalid promo code. Try "FRESH10"');
        }
    };

    // Handle checkout
    const handleCheckout = () => {
        alert('Proceeding to checkout...');
    };

    // Empty cart
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                            <ShoppingBag className="w-12 h-12 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Cart is Empty</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                            Add fresh products from our farmers to get started!
                        </p>
                        <Link
                            to="/products"
                            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition duration-300"
                        >
                            <ArrowLeft className="mr-2 w-5 h-5" />
                            Browse Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                            <ShoppingCart className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/products"
                        className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Continue Shopping
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Items</h2>
                            </div>

                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
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
                                ))}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-3">
                                <Truck className="w-8 h-8 text-green-500" />
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Free Delivery</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Over 500 BDT</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-3">
                                <RefreshCw className="w-8 h-8 text-green-500" />
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Easy Returns</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">7-day guarantee</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm flex items-center space-x-3">
                                <ShieldCheck className="w-8 h-8 text-green-500" />
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Farmer Verified</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">Direct from farms</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
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
                </div>
            </div>
        </div>
    );
};

export default Cart;