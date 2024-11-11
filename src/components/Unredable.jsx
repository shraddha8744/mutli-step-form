import React, { useState } from "react";

const Unredable = () => {
  const [value, setValue] = useState(0);
  const [history, sethistory] = useState([]);

  const mantainHistory = (key, prev, current) => {
    const obj = {
      action: key,
      prev,
      current,
    };
    let copyHistory = [...history];
    copyHistory.unshift(obj);
    sethistory(copyHistory);
  };
  const handleclick = (key) => {
    const val = parseInt(key);
    mantainHistory(key, value, val + value);
    setValue(value + val);
  };
  return (
    <div className="flex flex-col  justify-center items-center">
      <div>
        <h1>Unredable Action</h1>

        <div className="flex justify-center gap-10 items-center">
          <div className="flex gap-4">
            {["-1000", "-100", "-10", "-1"].map((item, i) => {
              return (
                <button
                  key={i}
                  className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
                  onClick={() => handleclick(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <h1 className="text-2xl font-bold">{value}</h1>
          <div className="flex gap-4">
            {["+1", "+10", "+100", "+1000"].map((item, i) => {
              return (
                <button
                  key={i}
                  className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
                  onClick={() => handleclick(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-[200px] h-[300px] border border-black mt-20">
        <h1>Manage history</h1>
        {history.map((item) => {
          return (
            <>
              <div>
                {item.action}:{item.prev}:{item.current}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Unredable;
