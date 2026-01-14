import { useContext, useState, useEffect } from "react";
import { getCartFromStorage } from "../../utils/cartUtils";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loaded, setLoaded] = useState(false); // 👈 important

    // 1️⃣ Load from localStorage
    useEffect(() => {
        const storedCart = getCartFromStorage();
        setCart(storedCart);
        setLoaded(true); // 👈 mark loaded
    }, []);

    // 2️⃣ Save to localStorage (ONLY after loaded)
    useEffect(() => {
        if (loaded) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, loaded]);

    // 3️⃣ ADD TO CART
    const addToCart = (id, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === id);

            if (existing) {
                return prev.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prev, { id, quantity }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateQuantity,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
