function newProductSlider() {
  const [name, setName] = useState("Kees");
  useEffect(() => {
    setTimeout(() => {
      setName("Maarten");
    }, 3000);
  }, []);

  return (
    <div style="{"-TwBgOpacity":"1","backgroundColor":"rgb(255 0 0 / var(--tw-bg-opacity, 1))","fontSize":"1.875rem","lineHeight":"2.25rem","fontWeight":"700","textDecorationLine":"underline"}">
      <span style="{"-TwBgOpacity":"1","backgroundColor":"rgb(255 0 0 / var(--tw-bg-opacity, 1))","fontSize":"1.875rem","lineHeight":"2.25rem","fontWeight":"700","textDecorationLine":"underline"}">
        We are testing our component {name}
      </span>
    </div>
  );
}
