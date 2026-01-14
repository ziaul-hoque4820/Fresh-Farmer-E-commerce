export const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
}

export const addToCartStorage = (id) => {
    const cart = getCartFromStorage()

    if (!cart.includes(id)) {
        cart.push(id)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const removeFromCartStorage = (id) => {
    const cart = getCartFromStorage().filter(item => item !== id)
    localStorage.setItem('cart', JSON.stringify(cart))
}
