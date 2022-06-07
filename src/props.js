import React from "react";

import List from "./components/list";

function Props() {

  const ar = [324,56,3213,658,2132]

  return (
    <div>

      <img 
        src="https://media.suara.com/pictures/970x544/2022/05/30/52558-nissan-z-safety-car-antara-suaradotcom.jpg" 
        alt="" 
      />

      <List 
        name="Mobil A" 
        color="yellow" 
        year={2013}
        array={ar}
      />
      <List 
        name="Mobil B" 
        color="red" 
        year={2015}
      />
      <List 
        name="Mobil C" 
        color="blue" 
        year={2007}
      />

    </div>
  );
}

export default Props;
