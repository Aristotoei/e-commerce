import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
interface Product {
  id: number;
  title: string;
  thumbnail: string;
  stock: number;
  rating: number;
  price:number;
}

interface Props {
  products: Product[];
}

export const ProductCard = ({ products }: Props) => {
  // console.log(products);
  const { addItem } = useCartStore();
  return (
    <div className='grid lg:grid-cols-4 lg:gap-10 lg:mt-10'>
      {products.map((product) => (
        <div className='bg-gray-100 rounded-xl lg:p-4' key={product.id}>
          <div className='justify-self-center'>
            <Link href={`/products/${product.id}`}>
              <Image 
                src={product.thumbnail}
                alt={product.title}
                width={256}
                height={256}
              />
            </Link>
          </div>
          <div className='text-[#023a22]'>
            <h1 className='lg:text-2xl font-medium'>{product.title}</h1>
            <div className='flex justify-between lg:text-xl lg:pt-3'>
              <p className='grow text-gray-400'>Stock: {product.stock}</p>
              <p className='flex items-center'><span className="material-symbols-outlined text-[#fc7209]">star</span>({(product.rating).toFixed(1)}/5)</p>
            </div>
            <div className='flex justify-between items-center lg:mt-4'>
              <p className='font-semibold lg:text-3xl'>${product.price}</p>
              <button
                onClick={() => addItem({...product, quantity: 1})}
                className='bg-[#023a22] text-white rounded-full flex justify-center items-center cursor-pointer lg:w-[40px] lg:h-[40px]'>
                <Image 
                  className='w-3/4 h-3/4'
                  src='add.svg'
                  alt='add'
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}