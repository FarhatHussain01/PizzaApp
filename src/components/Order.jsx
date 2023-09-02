import React from "react";

function Order({ closeHour }) {
    return (
      <>
        <div className="flex flex-col items-center gap-4">
          <p className="text-md text-center italic">
            we are open until {closeHour}:00. Come visit us or Order Online
          </p>
          <button className=" border-none text-lg font-medium bg-yellow-400 px-8 py-2 cursor-pointer transition duration-200 hover:bg-yellow-500 hover:text-white ">
            Order Now
          </button>
        </div>
      </>
    );
  }

  export default Order;