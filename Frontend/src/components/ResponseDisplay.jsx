import React from "react";

const ResponseDisplay = ({ data, selectedOptions }) => {
  const { is_prime_found, file_valid, file_mime_type, file_size_kb, alphabets, numbers, highest_lowercase_alphabet } = data;

  const renderData = () => {
    const displayData = {};
    if (selectedOptions.includes("Alphabets")) displayData.Alphabets = alphabets;
    if (selectedOptions.includes("Numbers")) displayData.Numbers = numbers;
    if (selectedOptions.includes("Highest Lowercase Alphabet"))
      displayData["Highest Lowercase Alphabet"] = highest_lowercase_alphabet;
    if (selectedOptions.includes("is_prime_found")) displayData.isPrimeFound = is_prime_found ? "True" : "False";
    if (selectedOptions.includes("file_valid")) displayData.isFileValid = file_valid ? "True" : "False";
    if (selectedOptions.includes("file_mime_type")) displayData.Filetype = file_mime_type;
    if (selectedOptions.includes("file_size_kb")) displayData.Filesize = file_size_kb;

      return Object.entries(displayData).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {Array.isArray(value) ? value.join(", ") : value}
        </div>
      ));
    

  };

  return (
    <div className="relative text-black">
      <h1 className="text-2xl font-bold">Response</h1>
      <div className="flex flex-col space-y-1">
        {renderData()}
      </div>
    </div>
  );
};

export default ResponseDisplay;
