import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const setDecremnt = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-green-600 font-bold ml-24">{count}</h1>
      <div className="flex gap-12">
        <button
          className="px-6 py-2 bg-blue-500 text-white text-xl font-semibold rounded-lg shadow-lg"
          onClick={() => setCount(count + 1)}
        >
          {" "}
          Increment
        </button>
        <button
          className="px-6 py-2 bg-blue-500 text-white text-xl font-semibold rounded-lg shadow-lg"
          onClick={setDecremnt}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
