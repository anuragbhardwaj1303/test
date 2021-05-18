import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

function People() {
  return (
    <section>
      <Person name='Anurag' job='Web Dev.' age='19' />
      <Person name='Deepti' job='Teacher' age='26' />
      <Person name='Kirti' job='Doctor.' age='16' />
      <Person name='Golu' job='Engineer' age='25' />
      <Person name='Chiku' job='Chef' age='17' />
    </section>
  );
}
const Person = (props) => {
  return (
    <article>
      <h3>Name : {props.name}</h3>
      <h5>Job : {props.job}</h5>
      <p>Age : {props.age}</p>
      <hr></hr>
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
