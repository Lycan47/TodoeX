import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import "./App.css";
import Tasklist from "./Tasklist";
import Button from "@material-ui/core/Button";
import Home from "./Home";
import Header from "./Header";
import Body from "./Body";

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
// import Icon from '@material-ui/core/Icon';
import AddCircleIcon from "@material-ui/icons/AddCircle";

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [input, setInput] = useState("");
  const [dict, setDict] = useState([]);

  const addtask = (event) => {
    //this will stop refresh
    event.preventDefault();
    setDict([...dict, { task: input, date: selectedDate }]);
    setInput(""); //reset the text area to blank
  };

  console.log(dict);

  return (
    <div className="app">
      <Home />
      {/* Home */}

      {/* Header */}
      <Header />
      {/* BodyApp */}
      <Body />
      {/* Footer */}

      <header className="app__header">
        {/* // New Form Implmentation */}
        <div className="formadd">
          <form onSubmit={addtask}>
            <TextField
              id="standard-textarea"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="formadd_inputfield"
              label="Add Task"
              placeholder="e.g. Get pastries sun at 9 #Pastries"
              multiline
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                className="formadd_schedule"
              />
            </MuiPickersUtilsProvider>

            <Button
              className="formadd_addbutton"
              disabled={!input}
              type="submit"
              variant="contained"
              startIcon={<AddCircleIcon />}
            >
              Add Task
            </Button>
          </form>
        </div>

        <div className="show_todos">
          <ul>
            {dict.map((todo) => (
              <Tasklist taskval={todo} />
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
