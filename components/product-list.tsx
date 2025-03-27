"use client"
import { useEffect, useState } from 'react'
import { ProductCard } from './product-card';

interface Product {
  id: number | number;
  title: string;
  thumbnail: string;
  description: string;
  weight: string
  rating: string;
}

interface ProductListProps {
  searchTerm: string;
}

export const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const [products, setProduct] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();

      if (res.ok) {
        setProduct(data.products);
      } else {
        console.log('Failed to fetch products');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProduct = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.title.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false
    return nameMatch || descriptionMatch;
  })

  console.log(filteredProduct);

  return (
    <div>
      <div className='text-[#023a22] font-bold lg:text-4xl lg:mb-5 lg:mt-5'>All Products</div>
      <div className='flex text-[#023a22] lg:text-lg'>
        <div className='flex lg:gap-2 grow'>
          <div className='bg-[#023a22] text-white rounded-xl lg:p-2'>
            <select>
              <option>All Categories</option>
            </select>
          </div>
          <div className='bg-gray-100 rounded-xl lg:p-2'>
            <select>
              <option>Price</option>
            </select>
          </div>
          <div className='bg-gray-100 rounded-xl lg:p-2'>
            <select>
              <option>Review</option>
            </select>
          </div>
          <div className='bg-gray-100 rounded-xl lg:p-2'>
            <select>
              <option>Color</option>
            </select>
          </div>
          <div className='bg-gray-100 rounded-xl lg:p-2'>
            <select>
              <option>Offer</option>
            </select>
          </div>
          <div className='bg-gray-100 rounded-xl lg:p-2'>
            <select>
              <option>Brands</option>
            </select>
          </div>
        </div>
        <div>
          <div className='bg-gray-100 rounded-xl lg:p-2'>
            <select>
              <option>Sort by</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <ProductCard products={filteredProduct} />
      </div>
    </div>
  );
};