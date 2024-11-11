import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState(["item1", "item2", "item3"]);
  return (
    <div>
      <ul>
        {list?.map((item, i) => {
          return <li key={i}> {item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
