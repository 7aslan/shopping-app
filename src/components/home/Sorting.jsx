import React from "react";

const Sorting = () => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select className="bg-white py-3 px-5" name="" id="">
        <option disabled value="">
          Select
        </option>
        <option value="inc">Increment</option>
        <option value="dec">Decrement</option>
      </select>
    </div>
  );
};

export default Sorting;
