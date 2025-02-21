function newProductSlider() {
  const [name, setName] = useState("Kees");
  useEffect(() => {
    setTimeout(() => {
      setName("Maarten");
    }, 3000);
  }, []);

  return (
    <div className="bg-[red]">
      <span className="text-3xl font-bold underline">
        We are testing our NEWEST component {name}
      </span>
    </div>
  );
}
