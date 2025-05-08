"use client"
import { ProductCard } from './product-card';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  stock: number;
  rating: number;
  price:number;
}
interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {

  return (
    <div>
      <div className='text-[#023a22] font-bold lg:text-4xl lg:mb-5 lg:mt-5'>All Products</div>
      <div className='flex text-[#023a22] font-medium lg:text-lg'>
        <div className='flex lg:gap-4 grow'>
          <button className='flex justify-center items-center cursor-pointer bg-[#023a22] text-white rounded-xl lg:p-2'>
            <p>All Categories</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <button className='flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl lg:p-2'>
            <p>Price</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <button className='flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl lg:p-2'>
            <p>Review</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <button className='flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl lg:p-2'>
            <p>Color</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <button className='flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl lg:p-2'>
            <p>Offer</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
          <button className='flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl lg:p-2'>
            <p>Brands</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
        </div>
        <div>
        <button className='flex justify-center items-center cursor-pointer bg-gray-100 rounded-xl lg:p-2'>
            <p>Sort by</p>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </button>
        </div>
      </div>
      <div>
        <ProductCard products={products} />
      </div>
    </div>
  );
};