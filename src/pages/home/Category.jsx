import React from 'react'
import CategoryCard from '../../component/CategoryCard';
import { categories } from '../../data/categorie-data';

function Category() {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Shop by Category
                    </h2>
                    <p
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Discover fresh, locally-sourced produce across various
                        categories
                    </p>
                </div>

                <div
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {
                        categories.map((cat => (
                            <CategoryCard
                            key={cat.title}
                            {...cat}
                            />
                        )))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category