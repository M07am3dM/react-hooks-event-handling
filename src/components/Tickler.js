import React from "react";

function Tickler() {
  function tickle(e) {
    // console.log("Teehee!");
    console.log(e);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
