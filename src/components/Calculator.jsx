import React, { useState } from "react";

const Calculator = () => {
  const [total, setTotal] = useState(0);

  const [values, setValues] = useState({
    principle: "",
    intrest: " ",
    year: " ",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    let P = values.principle;
    let r = values.intrest;
    let n = values.year;

    setTotal(P(r(1 + r) ^ (n / ((1 + r) ^ n) - 1)));
  };
  console.log(values);

  return (
    <div>
      <div>
        <h1>priniciple Amount</h1>
        <input
          type="text"
          className="border border-black"
          name="principle"
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Intrest</h1>
        <input
          type="text"
          className="border border-black"
          name="intrest"
          onChange={handleChange}
        />
      </div>
      <div>
        <h1>Years</h1>
        <input
          type="text"
          className="border border-black"
          name="year"
          onChange={handleChange}
        />
      </div>
      <h1>Total:- {total}</h1>
    </div>
  );
};

export default Calculator;
