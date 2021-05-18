import React from "react";
import ReactDom from "react-dom";
// import "./index.css";
function Person() {
  const btn = "search Button";
  const first = "Anurag";
  const last = "Bhardwaj";
  return (
    <section>
      <button>{btn}</button>
      <h2>{`Welcome Home ${first} ${last}`}</h2>
      <p>info</p>
    </section>
  );
}

ReactDom.render(<Person />, document.getElementById("root"));
