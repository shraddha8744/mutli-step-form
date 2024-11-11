import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../slice/userInfoSlice";
import { useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    languages: [],
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveUserData = (e) => {
    if (e.target.name === "languages") {
      setUserData((allData) => {
        const languages = [...allData.languages, e.target.value];

        return { ...allData, languages };
      });
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(userData));

    setUserData({
      firstName: "",
      lastName: "",
      gender: "",
      languages: [],
      userName: "",
      password: "",
    });
    navigate("/next");
  };

  return (
    <div className="ml-64">
      <h1>Multi Step Form</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-2/4 border border-black py-2 px-4"
      >
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={saveUserData}
          placeholder="First Name"
          className="border border-slate-500 "
          required
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={saveUserData}
          placeholder="Last Name"
          className="border border-slate-500 "
        />

        <div>
          <label>Gender</label> <br />
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={saveUserData}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={saveUserData}
          />
          Female
        </div>

        <div>
          <label>Languages</label> <br />
          <input
            type="checkbox"
            name="languages"
            value="Marathi"
            onChange={saveUserData}
          />
          Marathi
          <input
            type="checkbox"
            name="languages"
            value="English"
            onChange={saveUserData}
          />
          English
          <input
            type="checkbox"
            name="languages"
            value="Hindi"
            onChange={saveUserData}
          />
          Hindi
        </div>

        <input
          type="text"
          name="userName"
          value={userData.userName}
          onChange={saveUserData}
          placeholder="User Name"
          className="border border-slate-500 "
          required
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={saveUserData}
          placeholder="Password"
          className="border border-slate-500 "
          required
        />

        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MultiStepForm;
