import React from "react";

function EmbedExpression() {
  //Create function here

  function getMajor() {
    return " Full-Stack"
  }

  //Create a variable here
  const companyName = "Dumbways Indonesia"

  const batch = 'Batch 35'

  return (
    <div>
      <p>
        Welcome to {companyName} Class {getMajor()} {batch}
      </p>
    </div>
  );
}

export default EmbedExpression;