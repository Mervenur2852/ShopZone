import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex justify-end items-center">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-yellow-200 py-3 px-5"
        name=""
        id=""
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
