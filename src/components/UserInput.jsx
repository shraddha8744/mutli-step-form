import React, { useState } from "react";

const UserInput = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const addData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="enter name"
          name="name"
          value={data.name}
          onChange={addData}
        />
        <input
          type="email"
          placeholder=" enter email"
          name="email"
          value={data.email}
          onChange={addData}
        />
      </form>
      <h1>your name is {data.name}</h1>
      <h1>your email is {data.email}</h1>
    </div>
  );
};

export default UserInput;
