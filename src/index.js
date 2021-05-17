import React from "react"
import ReactDom from "react-dom"
function Greeting(){
  return <h1>Hey there <br></br>This is Anurag Bhardwaj</h1>
}

ReactDom.render(<Greeting/>,document.getElementById("root"));
