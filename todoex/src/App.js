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
    setTask([...task, { title: input, date: selectedDate, completed: false }]);
  };

  const removeTask = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...task];
    newTasks[index].completed = true;
    setTask(newTasks);
  };

  const undoAction = (index) => {
    const newTasks = [...task];
    newTasks[index].completed = false;
    setTask(newTasks);
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

      <div className="show__todos">
        <ul>
          {task.map((taskval, index) => (
            <Tasklist
              taskval={taskval}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
              undoAction={undoAction}
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
