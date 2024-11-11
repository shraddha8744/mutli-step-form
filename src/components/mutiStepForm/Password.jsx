import React from "react";
import { useDispatch } from "react-redux";
import { addUserData } from "../../slice/mutlStepSlice";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(" ");

  const handleInput = (e) => {
    let nameAndValue = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch(addUserData(nameAndValue));
  };
  return (
    <div className="box">
      <button
        className="text-white py-2 px-8 bg-blue-500 font-semibold text-center mb-3 rounded-lg "
        onClick={() => navigate("/username")}
      >
        Back
      </button>
      <input
        type="password"
        placeholder="Enter password"
        onChange={handleInput}
        className="border w-full py-2 outline-none border-slate-500"
        name="password"
        required
      />
      <button
        className="text-white py-2 px-8 bg-pink-500 font-semibold text-center mt-3 rounded-lg "
        onClick={() => navigate("/success")}
      >
        Next
      </button>
    </div>
  );
};

export default Password;
