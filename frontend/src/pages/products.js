import React from 'react';
import product from '../data/products_index';
import Image from "next/image"
import { mouse } from "../assets/index"

const Products = () => {
    return (
        <div className="container mx-auto  px-10 py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {product.map((item, index) => (
                    <div key={item.product_id} className="bg-white max-w-[300px] sm:max-w-[350px] md:max-w-[400px] shadow-md p-4 rounded-lg">
                        <Image
                            src={mouse}
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
