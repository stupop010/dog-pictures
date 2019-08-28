import React from "react";
import Title from "./components/Title";
import "./App.css";
import DogsContainer from "./components/DogsContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title />
        <DogsContainer />
      </div>
    </div>
  );
}

export default App;
