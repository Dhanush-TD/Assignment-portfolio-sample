import React from "react";

function Greeting() {
  const currentHour = new Date().getHours();

  let greeting = "";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour <= 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>{greeting}</h2>
    </div>
  );
}

export default Greeting;
