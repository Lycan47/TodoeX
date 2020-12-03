import React, { useState } from "react";
import "./App.css";
import Tasklist from "./Tasklist";
import Home from "./Home";
import Header from "./Header";
import Body from "./Body";
import TodoForm from "./TodoForm";

function App() {
  const [task, setTask] = useState([]);

  const addtask = (input, selectedDate) => {
    setTask([...task, { title: input, date: selectedDate }]);
  };

  console.log(task);

  return (
    <div className="app">
      <Home />

      <Header />

      <Body />

      {/* // New Form Implmentation */}

      <div>
        <TodoForm addtask={addtask} />
      </div>

      <div className="show_todos">
        <ul>
          {task.map((todo) => (
            <Tasklist taskval={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
