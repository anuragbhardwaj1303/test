import React from "react";
import ReactDom from "react-dom";
// import "./index.css";

function People() {
  const friends = [
    { name: "Anurag", job: "Developer", age: 29 },
    { name: "Golu", job: "Engineer", age: 25 },
    { name: "Kirti", job: "Doctor", age: 16 },
    { name: "Chiku", job: "Chef", age: 17 },
    { name: "Deepti", job: "Teacher", age: 25 },
    { name: "Ashu", job: "Pharmacist", age: 25 },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <p>Some fucking Content</p>
      </Person>
      <Person person={friends[1]}></Person>
      <Person person={friends[2]}></Person>
      <Person person={friends[3]}></Person>
<Person person={friends[4]}></Person>
<Person person={friends[5]}></Person>
    </section>
  );
}
const Person = (props) => {
  const { name, job, age } = props.person;
  return (
    <article>
      <h3> Name: {name} </h3>
      {props.children}
      <h5> Job: {job} </h5>
      <p> Age: {age} </p>
      <hr></hr>
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
