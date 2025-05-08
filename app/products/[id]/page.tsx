"use client"
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'
import { ProductDetail } from '@/components/product-detail';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  images: Array<string>;
  description: string;
  stock: number;
  rating: number;
  price: number;
  category: string
}

export default function Home() {

  const params = useParams<{ id: string }>()

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

  return (
    <div>
      <Header />
      <div className='lg:pl-24 lg:pr-24 lg:pb-24'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredProduct={filteredProduct}/>
        <ProductDetail params={params} products={products}/>
      </div>
    </div>
  );
}
