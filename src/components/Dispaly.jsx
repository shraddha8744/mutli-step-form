import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dispaly = () => {
  const data = useSelector((state) => state.user.allData);
  console.log("user data", data);
  const navigate = useNavigate(" ");

  return (
    <div>
      <div>
        <div className="flex gap-6">
          <h1 className="text-2xl font-bold">User Information </h1>
          <button
            className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </div>
        {data.length > 0 &&
          data?.map((item, id) => {
            const {
              firstName,
              gender,
              languages,
              lastName,
              password,
              userName,
            } = item;
            return (
              <div key={id}>
                <h1> Your Firstname is :-{firstName}</h1>
                <h1> Your Lastname is{lastName}</h1>
                <h2>Your Gender is:-{gender}</h2>
                <h2>Your Username is:-{userName}</h2>
                <h3>password is{password}</h3>
                {languages.length > 0 && (
                  <div>
                    <h1>Selected languages is</h1>
                    {languages.length > 0 &&
                      languages.map((e, i) => {
                        return <h3 key={i}>{e}</h3>;
                      })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dispaly;
