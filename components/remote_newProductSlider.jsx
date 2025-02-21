function newProductSlider() {
  const [name, setName] = useState("Kees");
  useEffect(() => {
    setTimeout(() => {
      setName("Maarten");
    }, 3000);
  }, []);

  return <div style="{"-TwBgOpacity":"1","backgroundColor":"rgb(255 0 0 / var(--tw-bg-opacity, 1))"}">We are testing our component {name}</div>;
}
