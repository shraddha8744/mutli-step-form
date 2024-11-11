import React, { useEffect, useState } from "react";

const Question = ({ data, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (i) => {
    if (index == i) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <h1>
        {data.question}{" "}
        <span
          onClick={() => handleToggle(index)}
          className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold cursor-pointer"
        >
          {isOpen ? "Close" : "Open"}
        </span>
      </h1>
      {isOpen && <p>{data.answer}</p>}
    </div>
  );
};

export default Question;
