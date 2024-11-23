import React, { useState } from "react";
import JsonInput from "./components/JsonInput";
import Dropdown from "./components/Dropdown";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle valid JSON response from the backend
  const handleResponse = (data) => {
    setResponseData(data);
  };

  // Handle dropdown option selection
  const handleSelection = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="md:w-1/2 w-screen h-fit flex flex-col items-center justify-center mx-6 p-11">
      <JsonInput onResponse={handleResponse} />
      {responseData && (
        <div className="md:flex justify-evenly items-center w-full space-y-4 mt-4">
          <Dropdown onSelection={handleSelection} />
          <ResponseDisplay data={responseData} selectedOptions={selectedOptions} />
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
