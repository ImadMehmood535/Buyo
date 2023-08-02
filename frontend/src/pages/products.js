import React from 'react';
import product from '../data/products_index';
import Image from "next/image"

const Products = () => {
    return (
        <div className="container mx-auto py-32">
            <div className="flex flex-wrap justify-center gap-6">
                {product.map((item, index) => (
                    <div key={item.product_id} className="bg-white max-w-[300px] sm:max-w-[350px] md:max-w-[300px] shadow-md p-4 rounded-lg">
                        <Image
                            src={item.image}
                            width={300}
                            height={200}
                            alt={item.title}
                        />
                        <div className="font-semibold text-lg">{item.title}</div>
                        <div className="text-gray-600">${item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
