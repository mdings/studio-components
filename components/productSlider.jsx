function Productslider(){ 
  const [name, setName] = useState('Frens');
  useEffect(() => {
    setTimeout(()=>{
      setName('Maarten');
    }, 3000)
  }, [])
  
  return <div>We are testing our component {name}</div>
}
