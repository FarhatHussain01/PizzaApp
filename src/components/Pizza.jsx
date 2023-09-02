import React from "react";

const Pizza = (props) => {
  const { img, name, ingredients, price, soldOut } = props;
  return (
    <li
      className={`flex flex-row gap-3 w-[300px] md:w-[340px] ${
        soldOut ? "text-gray-400" : " "
      } `}
    >
      <img
        src={img}
        alt="spinaci"
        width="100"
        className={`${
          soldOut ? "filter bg-red-500 grayscale opacity-80" : "bg-yellow-400"
        }`}
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl">{name}</h1>
        <p className="">{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Pizza;
