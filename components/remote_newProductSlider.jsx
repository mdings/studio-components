function newProductSlider() {
  const [name, setName] = useState("Kees");
  useEffect(() =&gt; {
    setTimeout(() =&gt; {
      setName("Maarten");
    }, 3000);
  }, []);

  return (
    <div style="{}">
      <span style="{}">
        We are testing our component {name}
      </span>
    </div>
  );
}
