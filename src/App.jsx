import { useState } from 'react'
import './App.css'



const allBrands = [
  {id:"1", brandName: "adidas"},
  {id:"2", brandName: "nike"},
  {id:"3", brandName: "puma"},
  {id:"4", brandName: "erke"}
];


function App() {
  const [search,setSearch]=useState("");
  const [brands,setBrands] = useState(allBrands);
  
const onSearchChange =(e) => {
  setSearch(e.target.value)
  const filteredBrands = brands?.filter(brand => brand.brandName.includes(search.toLowerCase()));
  setBrands(filteredBrands);
}


  return (
    <>
      <input onChange={onSearchChange} value={search} type="text" placeholder='search' />
      <ul>
        {
          brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
        }
      </ul>
      
    </>
  )
}

export default App
