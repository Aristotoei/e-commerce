import Image from 'next/image';

interface Product {
  id: number | number;
  title: string;
  thumbnail: string;
  description: string;
  stock: number;
  rating: number;
  price:number;
}

interface Props {
  searchTerm: string;
  filteredProduct: Product[];
}

export const SearchBox = ({ searchTerm, filteredProduct }: Props) => {
  return (
    <div className='lg:w-full relative'>
      {searchTerm != '' && (
        <div className='bg-gray-100 absolute top-5 w-full rounded-xl shadow-xl'>
          {filteredProduct.map((product) => (
            <div key={product.id}>
              <div className='flex justify-between items-center lg:pr-4'>
                <span className='flex items-center lg:pb-2 lg:pt-2'>
                  <Image 
                    src={product.thumbnail}
                    alt={product.title}
                    width={100}
                    height={100}
                  />
                  <div className='lg:pl-2'>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                  </div>
                </span>
                <span className='bg-[#023a22] text-white rounded-full flex justify-center items-center cursor-pointer lg:w-[36px] lg:h-[36px]'>
                  <Image 
                    className='w-3/4 h-3/4'
                    src='add.svg'
                    alt='add'
                    width={24}
                    height={24}
                  />
                </span>
              </div>
              <hr className='text-gray-300 lg:ml-4 lg:mr-4' style={{borderWidth: '1px'}}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}