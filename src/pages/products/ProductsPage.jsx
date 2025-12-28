import React from 'react'
import HeroSection from '../../component/HeroSection'
import FiltersAndProducts from './FiltersAndProducts'

function ProductsPage() {
    return (
        <div className='dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <HeroSection
                title={"Fresh Products"}
                description={"Discover fresh, locally-sourced produce from our trusted farmers."}
            />
            <FiltersAndProducts />
        </div>
    )
}

export default ProductsPage