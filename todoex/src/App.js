import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import './App.css';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
// https://material-ui-pickers.dev/guides/css-overrides


function App() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className="app">
      <header className="app_header">
        <h1>TodoeX</h1>
        <p className = "beyonce"> 
          A Todo App
        </p>
        <textarea type = "text" className='input_field' name = 'Todo list' placeholder= "e.g. Get pastries sun at 9 #Pastries"/>
        <input type="submit" className='add_button' value="Add a task" />
        <div className='date_time'>
          
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        

        </div>
      </header>
    </div>
  );
}




export default App;