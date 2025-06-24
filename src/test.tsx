import { useState } from "react";

function MyComponent() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    console.log(e.target.value);
  };

  

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Choose</option>
        <option value="coffee">Coffee</option>
        <option value="tea">Tea</option>
      </select>
      <p>Selected: {selectedValue}</p>
    </div>
  );
}

export default MyComponent;

