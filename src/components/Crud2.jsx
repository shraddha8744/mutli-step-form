import React, { useState } from "react";

const Crud2 = () => {
  const [taskData, setTaskData] = useState("");
  const [allTaskData, setAllTaskData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(null);
  const saveTask = () => {
    if (isEdit) {
      let update = allTaskData.map((ele, idx) => {
        return idx === index ? taskData : ele;
      });
      setAllTaskData(update);
      setIsEdit(false);
      setIndex(null);
    } else {
      setAllTaskData([...allTaskData, taskData]);
    }
    setTaskData(" ");
  };
  const delteItem = (i) => {
    const data = allTaskData.filter((ele, index) => {
      return index != i;
    });
    setAllTaskData(data);
  };

  const editItem = (item, index) => {
    setTaskData(item);
    setIsEdit(true);
    setIndex(index);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setTaskData(e.target.value)}
          value={taskData}
          className="border border-black"
        />
        <button onClick={saveTask}>{!isEdit ? "Add" : "save edit"}</button>
      </div>

      <div>
        {allTaskData.length > 0 &&
          allTaskData.map((item, index) => {
            return (
              <>
                <div key={index} className="flex gap-10 mt-11">
                  <h1>{item}</h1>
                  <button onClick={() => editItem(item, index)}>Edit</button>
                  <button onClick={() => delteItem(index)}>Delete</button>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Crud2;
