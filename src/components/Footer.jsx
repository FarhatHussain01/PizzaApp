import React from "react";
import Order from "./Order";

const Footer = () => {
  // we can put any js logic here here because it is just a javascript function
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 2;
  const closeHour = 10;
  const isOpen = hour >= openHour && hour <= closeHour;
  // const order =
  //   hour >= openHour && hour <= closeHour
  //     ? "we are open "
  //     : "sorry we are closed";
  // alert(order);
  return (
    <footer className="my-6 text-center">
      {/* conditional rendering using short circuting */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p className="text-md text-center italic">
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return  React.createElement(
  //   "footer",
  //   null,
  //   "we are open at .Come visit us or Order Online"
  // );
};

export default Footer;
