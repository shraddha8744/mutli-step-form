import axios from "axios";
import React, { useEffect, useState } from "react";

const ShoppingList = () => {
  const [food, setFood] = useState(" ");
  const [foodData, setFoodData] = useState([]);
  const [showList, setShowList] = useState([]);

  const getFoodData = async () => {
    try {
      const trimmedFood = food.trim(); // Remove extra spaces from input
      if (trimmedFood.length >= 2) {
        // Ensure at least 2 characters for meaningful search
        const response = await axios.get(
          `https://api.frontendeval.com/fake/food/${encodeURIComponent(
            trimmedFood
          )}`
        );
        setFoodData(response.data); // Set the fetched da
        // console.log("API Response:", response.data); // Debug API response
      }
    } catch (error) {
      console.error("API Error:", error); // Debug API error
    }
  };
  const handleInputChange = (e) => {
    setFood(e.target.value);
  };

  const handleClick = (e) => {
    console.log(e.target.getAttribute("data-id"));
    let index = e.target.getAttribute("data-id");
    if (index) {
      let obj = {
        id: Date.now(),
        data: foodData[index],
        isDone: false,
      };

      let copyShowlist = [...showList];
      copyShowlist.push(obj);
      setShowList(copyShowlist);
    }
    console.log(showList);
    setFood(" ");
  };

  const handleRightClick = (id) => {
    let copShowList = [...showList];
    let newList = copShowList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShowList(newList);
  };

  const handleDelete = (id) => {
    let copyList = [...showList];
    let updatedlist = copyList.filter((item) => {
      return item.id != id;
    });
    setShowList(updatedlist);
  };
  useEffect(() => {
    if (food.length >= 2) {
      getFoodData();
    }
    // getFoodData();
  }, [food]);
  return (
    <div className="border mx-[400px] text-center">
      <h1 className="text-2xl font-bold text-center">Shopping List</h1>
      <input
        type="text"
        className="border border-slate-500 my-6 outline-none w-[300px] py-3"
        placeholder="Enter your text"
        value={food}
        onChange={handleInputChange}
      />
      {food.length >= 2 && (
        <div
          className="border w-[300px] h-[200px] ml-[215px] overflow-y-scroll bg-gray-100"
          onClick={handleClick}
        >
          {foodData.map((item, i) => {
            return (
              <div
                key={i}
                data-id={i}
                className=" hover:bg-slate-300 mt-2 mx-3 py-1 rounded-lg"
              >
                {item}
              </div>
            );
          })}
        </div>
      )}

      <div className=" my-6 outline-none w-[300px] py-3 flex justify-evenly ml-52">
        {showList.map((item, index) => {
          return (
            <>
              <button key={index} onClick={() => handleRightClick(item.id)}>
                ✓
              </button>
              <div className={item.isDone ? "line-through" : "hello "}>
                {item.data}
              </div>
              <button onClick={() => handleDelete(item.id)}>X</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
