<html><head></head><body>function newProductSlider() {
  const [name, setName] = useState("Kees");
  useEffect(() =&gt; {
    setTimeout(() =&gt; {
      setName("Maarten");
    }, 3000);
  }, []);

  return <div style="--tw-bg-opacity: 1;
  background-color: rgb(255 0 0 / var(--tw-bg-opacity, 1));">We are testing our component {name}</div>;
}
</body></html>