import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app">
      <header className="app_header">
        <h1>TodoeX</h1>
        <p className = "beyonce"> 
          A Todo App
        </p>
        <textarea type = "text" className='input_field' name = 'Todo list' placeholder= "e.g. Get pastries sun at 9 #AbhaySingh"/>
        <input type="submit" className='add_button' value="Add a task" />
        
        
      </header>
    </div>
  );
}

export default App;