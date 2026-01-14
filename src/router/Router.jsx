import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layout/RootLayout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Farmers from '../pages/farmers/Farmers'
import ProductsPage from '../pages/products/ProductsPage'
import Login from '../pages/authentications/Login'
import Register from '../pages/authentications/register/Register'
import TermsPrivacy from '../component/TermsPrivacy'
import HelpCenter from '../component/HelpCenter'
import ContactUs from '../component/ContactUs'
import TermsOfService from '../component/TermsOfService'
import PrivacyPolicy from '../component/PrivacyPolicy'
import Cart from '../pages/cart-checkout/Cart'
import MyOrders from '../pages/my-orders/MyOrders'
import AddNewProduct from '../pages/add-new-product/AddNewProduct'
import ManageProducts from '../pages/manage-products/ManageProducts'
import ProductDetailsPage from '../pages/product-details/ProductDetailsPage'
import PaymentPage from '../pages/payment/PaymentPage'
import ForgotPassword from '../pages/authentications/ForgotPassword'
import PaymentSuccess from '../pages/payment/PaymentSuccess'
import AuthLayout from '../layout/AuthLayout'

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'farmers',
                element: <Farmers />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'termsPrivacy',
                element: <TermsPrivacy />
            },
            {
                path: 'help-center',
                element: <HelpCenter />
            },
            {
                path: 'contact',
                element: <ContactUs />
            },
            {
                path: 'terms-service',
                element: <TermsOfService />
            },
            {
                path: 'policy',
                element: <PrivacyPolicy />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'my-orders',
                element: <MyOrders />
            },
            {
                path: 'add-new-product',
                element: <AddNewProduct />
            },
            {
                path: 'manage-products',
                element: <ManageProducts />
            },
            {
                path: 'product-details/:id',
                element: <ProductDetailsPage />
            },
            {
                path: 'payment',
                element: <PaymentPage />
            },
            {
                path: 'success-payment',
                element: <PaymentSuccess />
            },
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            }
        ]
    }
])

export default router