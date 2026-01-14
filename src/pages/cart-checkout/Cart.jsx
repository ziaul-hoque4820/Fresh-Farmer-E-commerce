// Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Truck, ShieldCheck, RefreshCw, Leaf, Award, Star, Tag, X } from 'lucide-react';
import EmptyCard from './EmptyCard';
import TrustBadges from './TrustBadges';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import { useCart } from '../../context/cartContext/CartProvider';
import { productCartItem } from '../../utils/cartUtils';

const Cart = () => {

    const { updateQuantity, removeFromCart } = useCart();

    const cartItems = productCartItem();

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
                                        removeItem={removeFromCart}
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
                    <OrderSummary
                        promoCode={promoCode}
                        shippingFee={shippingFee}
                        setPromoCode={setPromoCode}
                        handleApplyPromo={handleApplyPromo}
                        appliedPromo={appliedPromo}
                        setAppliedPromo={setAppliedPromo}
                        subtotal={subtotal}
                        discount={discount}
                        tax={tax}
                        total={total}
                        handleCheckout={handleCheckout}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cart;