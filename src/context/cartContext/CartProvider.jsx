import { useContext, useState, useEffect } from "react"
import { getCartFromStorage, addToCartStorage } from "../../utils/cartUtils"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(getCartFromStorage())
    }, [])

    const addToCart = (id) => {
        addToCartStorage(id)
        setCart(getCartFromStorage())
    }

    return (
        <CartContext value={{ cart, addToCart }}>
            {children}
        </CartContext>
    )
}

export const useCart = () => useContext(CartContext)
