import React, { useState } from "react";
import axios from "axios";

const JsonInput = ({ onResponse }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(input);
      if (!parsedInput.data) throw new Error("Invalid JSON structure");

      const response = await axios.post("/bfhl", parsedInput);
      onResponse(response.data);
      setError(""); // Clear error if successful
    } catch (err) {
      const parsedInput = JSON.parse(input);
      // console.log(parsedInput);

      setError("Invalid JSON or API error: " + err.message);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <label className="text-2xl font-bold mb-4 text-black" htmlFor="API-input">API input</label>
      <textarea
        name="API-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON here...'
        className="w-full h-36 bg-white border border-gray-300 rounded-md p-2 text-black"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        className="w-full my-6 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-300 outline-none "
        onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default JsonInput;
