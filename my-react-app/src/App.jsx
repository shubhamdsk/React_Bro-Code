import InlineCSSButton from "./Components/InlineCSSButton";
import Cards from "./Components/Cards";
import Button from "./Buttons/Button";
import Student from "./Components/Student";
import UserGreeting from "./Components/UserGreeting";
import List from "./Components/List";
import ListItems from "./Components/ListItems";

function App() {
  const fruits = [
    { id: 1, name: "banana", calories: 20 },
    { id: 2, name: "apple", calories: 60 },
    { id: 3, name: "mango", calories: 40 },
    { id: 4, name: "pineapple", calories: 120 },
    { id: 5, name: "orange", calories: 160 },
    { id: 6, name: "cherry", calories: 90 },
  ];

  const vegetables = [
    { id: 7, name: "potatoes", calories: 120 },
    { id: 8, name: "celery", calories: 15 },
    { id: 9, name: "carrots", calories: 40 },
    { id: 10, name: "corn", calories: 35 },
    { id: 11, name: "broccoli", calories: 63 },
  ];

  return (
    <>
      {/*<Cards />
      <Cards />
       <UserGreeting isLoggedIn={true} username="Shubham" />
      <Student name="Shubham" age={24} phone={7218438401} />
      <Student name="Nikhil" age={23} phone={7083781599} />
      <Student name="Swayam" phone={7083781599} />
      <Student />
      <List /> 
      <InlineCSSButton />
      <Button />
      */}

      {fruits.length > 0 && <ListItems items={fruits} category={"Fruits"} />}
      {vegetables.length > 0 && (
        <ListItems items={vegetables} category={"Vegetables"} />
      )}
    </>
  );
}

export default App;
