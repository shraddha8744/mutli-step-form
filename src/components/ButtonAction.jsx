import React, { useState } from "react";

const ButtonAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  return (
    <div className="">
      {" "}
      <div className="">
        {isOpen && isOffer == false && (
          <div className="flex justify-center items-center mt-[16%]">
            <div className="w-[300px] h-[300px] border border-black   ">
              <button
                className="py-2 px-4 bg-red-500 text-white rounded-lg shadow-md font-semibold ml-4 mt-4 "
                onClick={() => setIsOpen(false)}
              >
                close
              </button>
              <div className="p-3 mt-12">
                <h1>Click the button below to accept our amazing offer</h1>
              </div>
              <button
                className="py-2 px-8 bg-blue-500 text-white rounded-lg shadow-md font-semibold ml-10 mt-8 "
                onClick={() => setIsOffer(true)}
              >
                Accept Offer
              </button>
            </div>
          </div>
        )}

        {isOpen == false && (
          <div className="flex flex-col justify-center items-center  mt-[20%] ">
            <button
              className="py-2 px-4 bg-green-500 text-white rounded-lg shadow-md font-semibold"
              onClick={() => setIsOpen(true)}
            >
              Show offer
            </button>
          </div>
        )}
      </div>
      {isOffer && (
        <h1 className="text-4xl font-bold text-center mt-[18%]">
          Offer Accepted
        </h1>
      )}
    </div>
  );
};

export default ButtonAction;
