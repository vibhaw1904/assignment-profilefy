import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';



type ProductListProps = {
    id:string,
    name:string,
    image:string,
    price:number,
    description:string
};



const ProductList:React.FC<ProductListProps> = () => {
    
    const [products,setProducts]=useState<ProductListProps[]>([]);

    useEffect(() => {
        fetch('/Products.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);



    return <div className='flex grid-flow-col grid-cols-3'>
        {
            products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>
}
export default ProductList;