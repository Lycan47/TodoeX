import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Moment from "moment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import UndoIcon from "@material-ui/icons/Undo";

function Tasklist({ taskval, index, completeTask, removeTask, undoAction }) {
  const handleDelete = (event) => {
    event.preventDefault();
    removeTask(index);
  };
  const handleComplete = (event) => {
    event.preventDefault();
    completeTask(index);
  };

  const handleUndo = (event) => {
    event.preventDefault();
    undoAction(index);
  };

  return (
    <div className="tasklist">
      <List>
        <ListItem>
          <ListItemAvatar>
            <AssignmentIcon />
          </ListItemAvatar>
          <ListItemText
            style={{ textDecoration: taskval.completed ? "line-through" : "" }}
            primary={taskval["title"]}
            secondary={Moment(taskval["date"]).format("LLLL")}
          />
          <ListItemAvatar>
            <Button
              type="submit"
              onClick={handleComplete}
              variant="contained"
              style={{ color: "green" }}
              startIcon={<CheckCircleIcon />}
            >
              Completed
            </Button>
            <Button
              type="submit"
              onClick={handleUndo}
              variant="contained"
              style={{ color: "blue", margin: "20px" }}
              startIcon={<UndoIcon />}
            >
              Undo
            </Button>
          </ListItemAvatar>
          <ListItemAvatar>
            <IconButton onClick={handleDelete}>
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          </ListItemAvatar>
        </ListItem>
      </List>
    </div>
  );
}

export default Tasklist;
