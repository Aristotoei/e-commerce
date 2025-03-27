import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav>
      <div className='lg:flex lg:justify-between lg:pt-8 lg:pb-6'>
        <div className='lg:basis-3/24 lg:text-4xl text-center text-[#023a22] font-bold'>Rungthavorn</div>
        <div className='lg:flex lg:justify-center lg:items-center lg:basis-3/24 lg:gap-2 text-[#023a22]'>
          <div>
            <Image
              className='lg:w-[32px]'
              src='pin_drop.svg'
              alt='pin'
              width={24}
              height={24}
            />
          </div>
          <div className='text-[#023a22]'>
            <div className='lg:text-md'>Delivery to</div>
            <div className='lg:text-xl font-bold'>Abu Dhabi</div>
          </div>
        </div>
        <div className='lg:basis-16/24 lg:flex lg:items-center lg:pl-6 lg:pr-6 lg:gap-2 bg-gray-100 rounded-full'>
          <div className='lg:flex-none'>
            <Image
            src='search.svg'
            alt='search'
            width={24}
            height={24}
            />
          </div>
          <div className='lg:grow'>
            <input
              className='lg:w-full focus:outline-none'
              type='text' 
              placeholder='Search your products, Categories or Brands'
              >
            </input>
          </div>
        </div>
        <div className='lg:flex lg:basis-2/24 gap-2 justify-end'>
          <div className='bg-[#023a22] rounded-full flex justify-center items-center lg:w-[48px] lg:h-[48px]'>
            <Image
              className='w-3/4 h-3/4'
              src='shopping_cart.svg'
              alt='shopping-cart'
              width={24}
              height={24}
            />
          </div>
          <div className='bg-[#ff720e] rounded-full flex justify-center items-center lg:w-[48px] lg:h-[48px]'>
            <Image
              className='w-3/4 h-3/4'
              src='account.svg'
              alt='account'
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <hr className='border border-gray-300'></hr>
      <div className='lg:flex lg:pt-8 lg:pb-8 text-[#023a22] lg:text-lg'>
        <ul className='lg:flex lg:gap-4 lg:grow'>
          <div className='flex items-center lg:p-1'>
            <li className='cursor-pointer dropdown'>Products
              <div className='dropdown-container'>
                <div>Product1</div>
                <div>Product2</div>
                <div>Product3</div>
                <div>Product4</div>
                <div>Product5</div>
              </div>
            </li>
            <Image
              src='arrow_down.svg'
              alt='arrow-down'
              width={24}
              height={24}
            />
          </div>
          <li className='cursor-pointer lg:p-1'>Whats new</li>
          <li className='cursor-pointer lg:p-1'>Delivery</li>
          <div className='flex items-center lg:p-1'>
            <li className='cursor-pointer dropdown'>Deals & Offers
              <div className='dropdown-container'>
                <div>Deal & Offer 1</div>
                <div>Deal & Offer 2</div>
                <div>Deal & Offer 3</div>
              </div>
            </li>
            <Image
              src='arrow_down.svg'
              alt='arrow-down'
              width={24}
              height={24}
            />
          </div>
          <li className='cursor-pointer lg:p-1'>Help & Support</li>
        </ul>
        <ul className='lg:flex lg:gap-4'>
          <li className='cursor-pointer lg:p-1'>Returns</li>
          <li className='cursor-pointer lg:p-1'>FAQs</li>
          <div className='flex justify-center items-center bg-orange-100 rounded-full lg:gap-2 lg:p-1'>
            <div className='bg-[#ff720e] rounded-full rounded-full flex justify-center items-center lg:w-[24px] lg:h-[24px]'>
              <Image
                className='w-3/4 h-3/4'
                src='mail.svg'
                alt='mail'
                width={24}
                height={24}
              />
            </div>
            <li className='cursor-pointer lg:pr-2'>Email Support</li>
          </div>
        </ul>
      </div>
    </nav>
  )
}