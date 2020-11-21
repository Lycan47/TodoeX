import { List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import Moment from 'moment';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Tasklist(props) {  
    return (
    <List>
                <ListItem>
                    <ListItemAvatar>
                      <AssignmentIcon/>
                    </ListItemAvatar>
                    <ListItemText primary={props.taskval['task']} secondary={Moment(props.taskval['date']).format('LLLL')} />
                </ListItem>
    </List>    )        
    }

export default Tasklist;