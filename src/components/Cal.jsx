import React, { useState } from "react";

const Cal = () => {
  const arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "C",
    "=",
  ];

  const [value, setvalue] = useState(" ");
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  const handleClick = (e) => {
    let id = e.target.id;

    if (id == "C") {
      setvalue("");
    } else if (id == "=") {
      let res = eval(value);
      setvalue(res);
      //prduce result
    } else {
      setvalue((val) => val + id);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let ans = eval(value);
      setvalue(ans);
    } catch (error) {
      alert("Enter valid input");
    }
  };
  return (
    <div className="border w-1/4 mx-auto">
      <h1 className="text-center text-2xl font-bold">Calculator</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          className="py-2 w-[80%] mx-8 mt-4 outline-none border border-slate-400"
          onChange={handleChange}
        />
      </form>
      <div className="grid grid-cols-4 mx-8 my-4" onClick={handleClick}>
        {arr.map((item, index) => {
          return (
            <div
              key={index}
              id={item}
              className="border bg-purple-400 px-4 py-2 m-3 text-center h-10 w-10 rounded-full text-white shadow-lg cursor-pointer "
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cal;
