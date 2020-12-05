import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./TodoForm.css";

function TodoForm({ addtask }) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addtask(input, selectedDate);
    setInput("");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setInput("");
  };

  return (
    <div className="app__formadd">
      <form onSubmit={handleSubmit}>
        <div className="formadd__input">
          <div className="formadd__inputfield">
            <TextField
              id="standard-textarea"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              label="Add Task"
              placeholder="e.g. Get pastries sun at 9 #Pastries"
              rowsMax={4}
              style={{ margin: 8 }}
              fullWidth
              multiline
            />
          </div>

          <div className="formadd__schedule">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>

        <div className="formadd__buttons">
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

          <div className="formadd__cancelbutton">
            <Button
              disabled={!input}
              type="submit"
              variant="contained"
              onClick={handleCancel}
              // startIcon={< />}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
