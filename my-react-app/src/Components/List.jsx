import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "banana", calories: 20 },
    { id: 2, name: "apple", calories: 60 },
    { id: 3, name: "mango", calories: 40 },
    { id: 4, name: "pineapple", calories: 120 },
    { id: 5, name: "orange", calories: 160 },
    { id: 6, name: "cherry", calories: 90 },
  ];

  // Sorting alphabetically without mutating the original array
  const Order = [...fruits]
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  // Sorting in reverse alphabetical order without mutating the original array
  const revOrder = [...fruits]
    .slice()
    .sort((a, b) => b.name.localeCompare(a.name));

  // Sorting by calories in ascending order without mutating the original array
  const calOrder = [...fruits].slice().sort((a, b) => a.calories - b.calories);

  // Sorting by calories in descending order without mutating the original array
  const revCalOrder = [...fruits]
    .slice()
    .sort((a, b) => b.calories - a.calories);

  // Filtering the low calorie fruits
  const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 90);

  // Filtering the fruits with more than 100 calories
  const highCalorieFruits = fruits.filter((fruit) => fruit.calories > 100);

  // Filtering the fruits with calories between 50 and 100
  const midCalorieFruits = fruits.filter(
    (fruit) => fruit.calories >= 50 && fruit.calories <= 100
  );

  return (
    <>
      <p>Fruitnames</p>
      <ol>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>Fruits in Alphabetical Order</p>
      <ol>
        {Order.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>Fruits in Reverse Alphabetical Order</p>
      <ol>
        {revOrder.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>Fruits by Calories (Ascending)</p>
      <ol>
        {calOrder.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>Fruits by Calories (Descending)</p>
      <ol>
        {revCalOrder.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>Low Calorie Fruits (less than 90 calories)</p>
      <ol>
        {lowCalorieFruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>High Calorie Fruits (more than 100 calories)</p>
      <ol>
        {highCalorieFruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>

      <p>Mid Calorie Fruits (50 to 100 calories)</p>
      <ol>
        {midCalorieFruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name}: &nbsp; {fruit.calories}
          </li>
        ))}
      </ol>
    </>
  );
};

export default List;
