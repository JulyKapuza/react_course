import { useState } from "react";
import Calculator from "./components/Calculator";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [result, setResult] = useState({
    ["Initial investment"]:10000,
    ["Annual investment"]: 1200,
    ["Expected return"]: 6,
    ["Duration"]: 10,
  });

  const inputs = Object.entries(result);
  const inputIsValid = Object.values(result).map((item)=>item>0).every((item)=>item);

  function onChange(e) {
    const input = e.target;
    setResult((prev) => {
      return {
        ...prev,
        [input.id]: +input.value,
      };
    });
  }
  const annualData = calculateInvestmentResults({
    initialInvestment: result["Initial investment"],
    annualInvestment: result["Annual investment"],
    expectedReturn: result["Expected return"],
    duration: result["Duration"],
  });


  return (
    <>
    
      <Calculator inputs={inputs} onChange={onChange} />
      {!inputIsValid && (
        <p className="center">Pleas enter valid input data</p>
      )}
      {inputIsValid && <Results annualData={annualData} />}
    </>
  );
}

export default App;
