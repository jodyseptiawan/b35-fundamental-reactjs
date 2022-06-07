import { useState } from "react";

function State() {
  //init State
  const [number, setNumber] = useState(35);

  //Create Function Add
  const Add = () => {
    setNumber(number + 1)
  }

  //Create Function Less
  const Less = () => {
    setNumber(number - 1)
  }

  return (
    // Code Inside div
    <div>
      <h1>{number}</h1>
      <button onClick={Add}>Add</button>
      <button onClick={Less} >Less</button>
    </div>
  );
}

export default State;
