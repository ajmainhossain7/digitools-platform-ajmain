import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise}) => {
    const products = use(productsPromise);
    return (
        <div className='px-4'>
            <div className="py-20 max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl font-bold">
                        Premium Digital Tools
                    </h2>
                    <p className='mt-3.5 text-gray-400'>
                        Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10 mx-auto max-w-7xl'>
                    {products.map((product) => (
                        <ProductCard product={product}></ProductCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;