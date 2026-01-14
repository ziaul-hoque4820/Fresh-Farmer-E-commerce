export const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
};
