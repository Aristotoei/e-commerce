"use client"
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/header'
import { ProductList } from '@/components/product-list';
import { Navbar } from '@/components/navbar'
import { PromoPic } from '@/components/promo_pic';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  stock: number;
  rating: number;
  price:number;
}

export default function Home() {

  const [searchTerm, setSearchTerm] = useState<string>("");

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
      <Header />
      <div className='lg:pl-24 lg:pr-24 lg:pb-24'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredProduct={filteredProduct}/>
        <PromoPic />
        <ProductList products={products}/>
      </div>
    </div>
  );
}
