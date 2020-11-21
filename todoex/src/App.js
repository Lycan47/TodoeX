import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import './App.css';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Moment from 'moment';
import { render } from '@testing-library/react';
// https://material-ui-pickers.dev/guides/css-overrides


function App() {
  const[selectedDate, handleDateChange] = useState(new Date());
  const[schedule, setSchedule] = useState([]);
  const[input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  
  const addtask = (event) => {
    //this will stop refresh
    event.preventDefault();
    setTodos([...todos, input]);
    setSchedule([...schedule, selectedDate.toString()]);
    setInput(''); //reset the text area to blank
    
  }
  console.log(todos);
  console.log(schedule);

  return (
    
    <div className="app">
      <header className="app_header">
        <h1>TodoeX</h1>
        <p className = "beyonce"> 
          A Todo App
        </p>
        <textarea value = {input} onChange= {event => setInput(event.target.value)} type = "text" className='input_field' name = 'Todo list' placeholder= "e.g. Get pastries sun at 9 #Pastries"/>
        <div className='date_time'>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </div>
        <input disabled = {!input} type="submit" className='add_button' value="Add a task" onClick= {addtask}/>
        
        <ul>
          {todos.map(todo =>{return <li>{todo}</li>;})}
          {schedule.map(datetime =>{return <li>{
              Moment(datetime).format('DD mm YYYY')
          }</li>;})}
        </ul>
      
      </header>
    </div>
  );
}




export default App;