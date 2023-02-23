import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  }

  const options= [
    {label: 'Red', value:'red'},
    {label: 'Green', value:'green'},
    {label: 'Yellow', value:'yellow'},
  ]

  return (
  <div className="flex">
    <Dropdown options={options} onChange={handleSelect} value={selected}/>
    <Dropdown options={options} onChange={handleSelect} value={selected}/>
  </div>
  )
  
}

export default DropdownPage;
