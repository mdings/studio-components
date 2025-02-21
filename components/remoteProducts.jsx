function RemoteProducts() {
  const [name, setName] = useState("Kees");
  useEffect(() => {
    setTimeout(() => {
      setName("Maarten");
    }, 3000);
  }, []);

  return <div className="bg-[blue]">These are our products</div>;
}


