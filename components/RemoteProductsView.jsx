function RemoteProductsView({ name: initialName }) {
  const [name, setName] = useState(initialName);
  useEffect(() => {
    setTimeout(() => {
      setName("Maarten");
    }, 3000);
  }, []);

  return <div className="bg-[blue]">These are our products {name}</div>;
}