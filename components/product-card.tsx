interface Product {
  id: string | number;
  title: string;
}

interface Probs {
  products: Product[];
}

export const ProductCard = ({ products }: Probs) => {
  // console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
        </div>
      ))}
    </div>
  );
}