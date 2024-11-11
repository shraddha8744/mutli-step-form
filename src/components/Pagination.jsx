import React, { useState } from "react";
import { userData } from "../utils/constant.jsx";

const Pagination = () => {
  const [data, setAllData] = useState(userData);

  const [currenetPage, setcurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const indexOffLastItem = currenetPage * rowPerPage;

  const indexOffFirstItem = indexOffLastItem - rowPerPage;

  const currentItems = data.slice(indexOffFirstItem, indexOffLastItem);
  console.log(currentItems);
  const totalPages = Math.ceil(data.length / rowPerPage);

  const handlePrev = () => {
    setcurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setcurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const handlePageClick = (pageNo) => {
    setcurrentPage(pageNo);
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div className="flex gap-8">
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
          onClick={handlePrev}
          disabled={currenetPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          return (
            <>
              <button
                className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            </>
          );
        })}
        <button
          className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
