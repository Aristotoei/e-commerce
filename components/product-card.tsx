import Image from 'next/image';
interface Product {
  id: string | number;
  title: string;
  thumbnail: string;
  weight: string;
  rating: string;
}

interface Probs {
  products: Product[];
}

export const ProductCard = ({ products }: Probs) => {
  // console.log(products);
  return (
    <div className='lg:grid grid-cols-4 gap-4'>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <Image 
              src={product.thumbnail}
              alt={product.title}
              width={256}
              height={256}
            />
          </div>
          <div>
            <h1>{product.title}</h1>
            <div className='flex justify-between'>
              <p className='grow'>{product.weight}</p><p>{product.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}