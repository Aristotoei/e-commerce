import Image from 'next/image'

export const PromoPic = () => {
  return (
    <div className='flex lg:w-full lg:pt-4 lg:pb-20'>
      <Image
        className='grow rounded-3xl'
        src='/promo_pic.jpg'
        alt='promo-pic'
        width={2560}
        height={970}
        priority={true}
      />
    </div>
  )
}