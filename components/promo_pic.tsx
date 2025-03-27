import Image from 'next/image'

export const PromoPic = () => {
  return (
    <div className='flex justify-center lg:w-full'>
      <div className='lg:w-3/4'>
        <Image
          className='grow rounded-3xl'
          src='/promo_pic.jpg'
          alt='promo-pic'
          width={2560}
          height={970}
          priority={true}
        />
      </div>
    </div>
  )
}