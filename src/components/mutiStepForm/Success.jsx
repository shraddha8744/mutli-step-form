import React from "react";
import { useSelector } from "react-redux";

const Success = () => {
  const AllData = useSelector((state) => state.user.userData);
  console.log(AllData);
  const { name, email, username, password } = AllData;

  return (
    <div>
      <h1>User Info</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{username}</h1>
      <h1>{password}</h1>
    </div>
  );
};

export default Success;
