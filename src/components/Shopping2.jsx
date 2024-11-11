import axios from "axios";
import React, { useEffect, useState } from "react";

const Shopping2 = () => {
  const [value, setValue] = useState(" ");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const suggestionBox = async () => {
    try {
      const trimmedFood = value.trim(); // Remove extra spaces from input
      if (trimmedFood.length >= 2) {
        // Ensure at least 2 characters for meaningful search
        const response = await axios.get(
          `https://api.frontendeval.com/fake/food/${encodeURIComponent(
            trimmedFood
          )}`
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (value.length >= 2) {
      console.log("called");

      suggestionBox();
    }
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center border mx-64 font-bold ">
        <h1 className="text-2xl font bold">Shopping List</h1>

        <input
          type="text"
          placeholder="Enter text"
          className="border border-slate-500 mt-5 w-[300px] outline-none py-2"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Shopping2;
