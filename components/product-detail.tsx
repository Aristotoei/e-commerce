import Image from 'next/image';
import { useCartStore } from "@/store/cart-store";

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
interface Props {
  products: Product[];
  params: {
    id: string;
  }
}

export const ProductDetail = ({ params, products }: Props) => {

  const index = Number(params.id)-1;
  const product = products[index];
  const { items, addItem, removeItem } = useCartStore();

  if (index < 0 || index >= products.length) {
    return <div className='text-gray-500 lg:text-xl'>Loading...</div>;
  }

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItem = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price as number,
      thumbnail: product.thumbnail ? product.thumbnail : '',
      quantity: 1,
    });
  };

  return (
    <div className='flex lg:mt-16 lg:w-3/4 justify-self-center'>
      <div className='basis-1/2'>
        <Image
        className='justify-self-center border-1 border-gray-200 rounded-md' 
        src={product.images[0]}
        alt={product.title}
        width={500}
        height={500}
        />
      </div>
      <div className='basis-1/2 text-[#023a22]'>
        <p>{product.category}</p>
        <p className='lg:text-3xl lg:mb-1'>{product.title}</p>
          <p className='lg:text-xl lg:mb-1 flex items-center'><span className="material-symbols-outlined text-[#fc7209]">star</span>({(product.rating).toFixed(1)}/5)</p>
        <p className='lg:text-2xl lg:mb-1.5'>${product.price}</p>
        <p className='lg:w-3/4 lg:mb-5'>{product.description}</p>
        <div className='flex items-center lg:gap-4 lg:text-xl lg:p-1'>
          <button className='flex justify-center bg-[#023a22] text-white cursor-pointer rounded-md lg:w-[30px] lg:h-[30px]' onClick={() => removeItem(product.id)}>-</button>
          <span>{quantity}</span>
          <button className='flex justify-center bg-[#023a22] text-white cursor-pointer rounded-md lg:w-[30px] lg:h-[30px]' onClick={onAddItem}>+</button>
        </div>
        {/* <button className='bg-[#023a22] text-white rounded-full lg:p-3 lg:px-5 cursor-pointer'>
          Add To Cart
        </button> */}
      </div>
    </div>
  )
}