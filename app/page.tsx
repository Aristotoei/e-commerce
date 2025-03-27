import { Header } from '@/components/header'
import { ProductList } from '@/components/product-list';
import { Navbar } from '@/components/navbar'
import { PromoPic } from '@/components/promo_pic';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='lg:pl-24 lg:pr-24'>
        <Navbar />
        <PromoPic />
        <ProductList />
      </div>
    </div>
  );
}
