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

      <Header />

      <Body />

      {/* // New Form Implmentation */}

      <div className="app__formadd">
        <form onSubmit={addtask}>
          <div className="formadd__inputfield">
            <TextField
              id="standard-textarea"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              label="Add Task"
              placeholder="e.g. Get pastries sun at 9 #Pastries"
              multiline
            />
          </div>

          <div className="formadd__schedule">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>

          <div className="formadd__addbutton">
            <Button
              disabled={!input}
              type="submit"
              variant="contained"
              startIcon={<AddCircleIcon />}
            >
              Add Task
            </Button>
          </div>
        </form>
      </div>

      <div className="show_todos">
        <ul>
          {dict.map((todo) => (
            <Tasklist taskval={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
