import React from 'react'
import HeroSection from '../../component/HeroSection'
import FiltersAndProducts from './FiltersAndProducts'

function ProductsPage() {
    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeroSection
                title={"Fresh Products"}
                backgroundImage={"https://images.unsplash.com/photo-1572402123736-c79526db405a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                description={"Discover fresh, locally-sourced produce from our trusted farmers."}
            />
            <FiltersAndProducts />
        </div>
    )
}

export default ProductsPage