function newProductSlider() {
  const [name, setName] = useState("Kees");
  useEffect(() => {
    setTimeout(() => {
      setName("Maarten");
    }, 3000);
  }, []);

  return (
    <div class="bg-[red]">
      <span class="text-3xl font-bold underline">
        We are testing our NEW component {name}
      </span>
    </div>
  );
}
