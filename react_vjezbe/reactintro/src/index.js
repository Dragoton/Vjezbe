import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Main from "./Main";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
