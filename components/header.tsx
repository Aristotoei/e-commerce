import Image from 'next/image'

export const Header = () => {
  return (
    <div className='bg-[#023a22] text-white flex justify-center items-center lg:p-3 lg:text-lg'>
      <p>Get <span className='text-[#ffe754]'>30% OFF</span> your first order Order</p>
      <div className='lg:pl-5 lg:pr-5'>
        <Image
          src='star.svg'
          alt='star'
          width={24}
          height={24}
        />
      </div>
      <p>now and get it delivered within <span className="text-[#ffe754]">20 minutes</span> across the UAE</p>
    </div>
  )
}