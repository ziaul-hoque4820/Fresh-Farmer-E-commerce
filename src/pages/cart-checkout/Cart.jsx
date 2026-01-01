// Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Truck, ShieldCheck, RefreshCw, Leaf, Award, Star, Tag, X } from 'lucide-react';
import EmptyCard from './EmptyCard';
import TrustBadges from './TrustBadges';
import CartItem from './CartItem';

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
        return <EmptyCard />
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
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        removeItem={removeItem}
                                        updateQuantity={updateQuantity}
                                        calculateItemTotal={calculateItemTotal}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <TrustBadges />
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