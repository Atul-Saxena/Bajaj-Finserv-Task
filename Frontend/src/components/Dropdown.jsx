import React, { useState } from "react";

const Dropdown = ({ onSelection }) => {
  const options = [
    "Alphabets",
    "Numbers",
    "Highest Lowercase Alphabet",
    "is_prime_found",
    "file_valid",
    "file_mime_type",
    "file_size_kb"];
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const { value, checked } = event.target;
    setSelected((prevSelected) =>
      checked ? [...prevSelected, value] : prevSelected.filter((option) => option !== value)
    );
    onSelection(checked ? [...selected, value] : selected.filter((option) => option !== value));
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-2xl font-bold">Select Options:</label>
      <div className="flex flex-col space-y-1">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={option}
              checked={selected.includes(option)}
              onChange={handleChange}
              className="form-checkbox text-blue-600"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      <div className="text-sm text-gray-600">
        Selected: {selected.length > 0 ? selected.join(", ") : "None"}
      </div>
    </div>
  );
};

export default Dropdown;
