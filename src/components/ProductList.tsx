import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export type Product = {
    id: string;
    title: string;
    image: string;
    price: number;
    description: string;
    rating: number;
    discount?: number;
};

type ProductListProps = {};

const ProductList: React.FC<ProductListProps> = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className='grid gap-3 grid-cols-3'>
                {products.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
