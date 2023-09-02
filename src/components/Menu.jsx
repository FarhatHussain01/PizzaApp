import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../PizzaData";

const Menu = () => {
  console.log(pizzaData);
  const pizzas = pizzaData.map((pizza, i) => {
    return (
      <Pizza
        img={pizza.photoName}
        name={pizza.name}
        ingredients={pizza.ingredients}
        price={pizza.soldOut ? "SOLD OUT" : pizza.price}
        key={i}
        soldOut={pizza.soldOut}
        // Adding a unique key for React list rendering
      />
    );
  });

  // const numPizza = 0; // if condition is falsy it dont render anything on screen
  const numPizza = pizzas.length;
  // console.log(numPizza);

  return (
    <>
      <h2 className="inline-block py-1 font-semibold my-5 leading-6 uppercase border-black border-y-2">
        Our menu
      </h2>

      {/* if num of pizzas is greater then 0 then render it on screen else not */}
      {numPizza > 0 ? (
        <>
          {/* jsx only return one element so for this we use fragments */}
          <p className="text-center w-[80%] mb-10 text-base ">
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className="grid md:grid-cols-2  gap-5 mb-7 items-center justify-center">
            {/* <Pizza /> */}

            {pizzas}

            {/* <Pizza
            img={pizzaData[0].photoName}
            name={pizzaData[0].name}
            ingredients={pizzaData[0].ingredients}
            price={pizzaData[0].price}
          />
          <Pizza
            img={pizzaData[1].photoName}
            name={pizzaData[1].name}
            ingredients={pizzaData[1].ingredients}
            price={pizzaData[1].price}
          />
        */}
          </ul>
        </>
      ) : (
        <p className="italic text-center  text-xl text-yellow-500">
          We're still working on our menu. Please come back later :)
        </p>
      )}
    </>
  );
};

export default Menu;
