  const [products, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();

      if(res.ok) {
        setProduct(data.products);
      } else {
        console.log('failed to fetch');
      }

    }
    catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
