import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise, carts, setCarts}) => {
    const products = use(productsPromise);
    return (
        <div className='px-4'>
            <div className="pb-20 max-w-7xl mx-auto">              
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 mx-auto max-w-7xl'>
                    {products.map((product) => (
                        <ProductCard product={product} carts={carts} setCarts={setCarts}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;