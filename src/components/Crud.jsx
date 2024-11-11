import React, { useState } from "react";

const Crud = () => {
  const [taskData, setTaskData] = useState("");
  const [allTaskData, setAllTaskData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedData, setUpdatedData] = useState("");

  const handleTaskData = (e) => {
    setTaskData(e.target.value);
  };

  const AddTask = () => {
    if (isEdit) {
      // Update the existing task
      const newData = allTaskData.map((task, index) =>
        index === updatedData ? taskData : task
      );
      setAllTaskData(newData);
      setIsEdit(false); // Reset editing state
      setUpdatedData(""); // Clear the updated task data
    } else {
      // Add a new task
      setAllTaskData([...allTaskData, taskData]);
    }
    setTaskData(""); // Clear input after adding or updating
  };

  const deleteItem = (data) => {
    const filteredData = allTaskData.filter((task) => task !== data);
    setAllTaskData(filteredData);
  };

  const updateItem = (task, index) => {
    setTaskData(task);
    setIsEdit(true); // Enable edit mode
    setUpdatedData(index); // Store the task being edited
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="border border-black mt-20 mx-32"
          onChange={handleTaskData}
          value={taskData}
        />
        <button onClick={AddTask}>{!isEdit ? "Add" : "Update"}</button>
      </div>
      <div>
        {allTaskData.length > 0 &&
          allTaskData.map((item, i) => (
            <div className="flex gap-6 mt-8 items-center" key={i}>
              <h1>{item}</h1>
              <button
                className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
                onClick={() => updateItem(item, i)}
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(item)}
                className="py-2 px-4 bg-red-500 text-white rounded-lg shadow-md font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Crud;
