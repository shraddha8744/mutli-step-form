import React, { useState } from "react";
import { flowers } from "../utils/constant.jsx";

const Crousal = () => {
  const [flowerData, setFlowerData] = useState(flowers);
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index == 4) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handleBack = () => {
    if (index == 0) {
      setIndex(flowerData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <h1>Images Crousal</h1>
      <div className="mx-32 flex justify-between items-center">
        <button
          className="py-2 px-4 bg-purple-500 text-white rounded-lg shadow-md font-semibold"
          onClick={handleBack}
        >
          Back
        </button>
        <img src={flowerData[index].url} alt="flower images" />

        <button
          className="py-2 px-4 bg-purple-500 text-white rounded-lg shadow-md font-semibold"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Crousal;
