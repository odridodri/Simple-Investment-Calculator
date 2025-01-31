import { useState } from "react";
import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import ResultsTable from "./components/ResultsTable";

function App() {
  //organizing inputs
  const [inputList, nextInputs] = useState({
    initialInv: 1000,
    annualInv: 100,
    expReturn: 10,
    duration: 3,
  });

  function handleInputChange(inputIdentifier, event) {
    nextInputs((inputList) => {
      return {
        ...inputList,
        [inputIdentifier]: +event.target.value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs inputs={inputList} handleChange={handleInputChange} />
      {inputList.duration >= 1 ? (
        <ResultsTable inputs={inputList} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
