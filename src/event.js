import React from "react";
// import Greeting from "./Greeting";

function Event() {
  //Create function here
  function Greeting() {
      alert('Welcome all file: Greeting.js')
  }

  return (
    <div>
      <p>If you press "Click Me" then an alert will appear</p>
      <button onClick={() => alert('Hello Full-Stack')}>Click Me</button>
      
      <button onClick={Greeting}>Greeting</button>
    </div>
  );
}

export default Event;
