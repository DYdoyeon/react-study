import React from "react";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import "./App.css";
import CounterContatiner from "./containers/CounterContatiner";
import TodosContainer from "./containers/TodosContainer";
const App = () => {
  return (
    <div>
      <CounterContatiner />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
