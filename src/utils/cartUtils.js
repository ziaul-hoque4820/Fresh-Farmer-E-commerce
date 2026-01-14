import { useCart } from "../context/cartContext/CartProvider";
import { productsData } from "../data/products";

export const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
};


export const productCartItem = () => {
    const { cart } = useCart();

    const cartItems = cart.map(cartItem => {
        const product = productsData.find(
            p => p.id === cartItem.id
        )

        return {
            ...product,
            cartQuantity: cartItem.quantity
        }
    });

    return cartItems;
}
