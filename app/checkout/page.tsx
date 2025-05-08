 "use client"
import { useCartStore } from '@/store/cart-store'
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage () {

  const { items, addItem, removeItem } = useCartStore();
  const totalPrice = items.reduce((acc, item) => acc + item.price*item.quantity, 0);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <div className='text-center text-white lg:p-12 bg-[#023a22]'>
        <h1 className='lg:text-4xl'>Shopping Cart</h1>
        <Link href={'/'}><p className='lg:mt-5 underline'>Home</p></Link>
      </div>
      <div className='flex w-3/4 justify-self-center gap-4 lg:mt-16'>
        <div className='basis-3/4'>
          <div className='grid grid-cols-6 gap-4 items-center p-4 text-center bg-yellow-400 rounded-md lg:text-lg'>
            <p className='col-span-3'>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {items.map((item) => (
            <>
              <div key={item.id} className='grid grid-cols-6 gap-4 items-center p-4 text-center'>
                <Image
                  className='justify-self-center border-1 border-gray-200 rounded-md' 
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <p className='col-span-2'>{item.title}</p>
                <p>${item.price}</p>
                <div className='flex items-center justify-center lg:gap-4 lg:text-xl lg:p-1'>
                  <button className='flex justify-center bg-[#023a22] text-white cursor-pointer rounded-md lg:w-[30px] lg:h-[30px]' onClick={() => removeItem(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className='flex justify-center bg-[#023a22] text-white cursor-pointer rounded-md lg:w-[30px] lg:h-[30px]' onClick={() => addItem({...item, quantity: 1})}>+</button>
                </div>
                <span className='text-center'>
                  ${((item.price * item.quantity)).toFixed(2)}
                </span>
              </div>
              <hr className='text-gray-300'/>
            </>
          ))}
        </div>
        <div className='basis-1/4 border-1 border-gray-300 rounded-md lg:p-4'>
          <p className='font-semibold'>Order Summary</p>
          <hr className='text-gray-300 lg:my-4'/>
          <div className='text-gray-400'>
            <p className='flex justify-between lg:mb-3'>Items<span className='text-black'>{totalQuantity}</span></p>
            <p className='flex justify-between lg:mb-3'>Sub Total<span className='text-black'>${(totalPrice).toFixed(2)}</span></p>
            <p className='flex justify-between lg:mb-3'>Shipping<span className='text-black'>$00.00</span></p>
            <p className='flex justify-between lg:mb-3'>Taxes<span className='text-black'>$00.00</span></p>
          </div>
          <hr className='text-gray-300 lg:my-4'/>
          <p className='flex justify-between text-gray-400 lg:mb-4'>Total<span className='text-black'>${(totalPrice).toFixed(2)}</span></p>
          <button className='text-white bg-[#023a22] rounded-full w-full cursor-pointer lg:p-3'>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  )
}