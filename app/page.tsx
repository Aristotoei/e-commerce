"use client"
import React, { useState } from 'react';
import { Header } from '@/components/header'
import { ProductList } from '@/components/product-list';
import { Navbar } from '@/components/navbar'
import { PromoPic } from '@/components/promo_pic';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div>
      <Header />
      <div className='lg:pl-24 lg:pr-24'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <PromoPic />
        <ProductList searchTerm={searchTerm}/>
      </div>
    </div>
  );
}
