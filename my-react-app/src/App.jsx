import InlineCSSButton from "./Components/InlineCSSButton";
import Cards from "./Components/Cards";
import Button from "./Buttons/Button";
import Student from "./Components/Student";

function App() {
  return (
    <>
      <Cards />
      <Cards />
      <Student name="Shubham" age={24} phone={7218438401} />
      <Student name="Nikhil" age={23} phone={7083781599} />
      <Student name="Swayam" phone={7083781599} />
      <Student />
      <InlineCSSButton />
      <Button />
    </>
  );
}

export default App;
