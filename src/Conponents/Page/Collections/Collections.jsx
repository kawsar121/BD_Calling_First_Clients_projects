import React from 'react';
import NewProducts from '../Products/NewProducts';
import CategoryProducts from '../Products/CategoryProducts';
import ProductsCarousel from '../Products/ProductsCarousel ';

const Collections = () => {
    return (
        <div className='min-h-screen mt-24 max-w-7xl mx-auto'>
            <div className='mb-20'>
                <CategoryProducts></CategoryProducts>
            </div>
            <div className='mb-20'>
                <h1 className='text-center font-semibold text-3xl text-pink-500 hover:text-pink-900'>All Products Collectins</h1>
                <ProductsCarousel></ProductsCarousel>
            </div>
            <div className=''>
                <h1 className='text-center font-medium text-3xl text-pink-500 hover:text-pink-900'>New Collections</h1>
                <NewProducts></NewProducts>
            </div>
        </div>
    );
};

export default Collections;