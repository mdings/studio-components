function RemoteProductsView({ name: initialName }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProperties = async () => {
      const products = await fetch(`/api/fashion`).then((response) =>
        response.json()
      );
      setProducts(products);
    };

    fetchProperties();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-none">
      Here are the products
      {products.map((product) => {
        return <div>{product.name}</div>;
      })}
    </div>
  );
}