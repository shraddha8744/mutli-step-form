import React, { useState } from "react";
import { Questions } from "../utils/constant";
import Question from "./Question";

const FQA = () => {
  const [data] = useState(Questions);
  return (
    <div>
      {data.map((item, i) => {
        return <Question index={i} key={i} data={item} />;
      })}
    </div>
  );
};

export default FQA;
