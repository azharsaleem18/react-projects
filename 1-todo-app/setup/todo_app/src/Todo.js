import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Todo.css';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { Input, FormControl, ListItem, List, ListItemText, ListItemAvatar, Avatar, Modal, Button } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen = () => {
        setOpen(true)
    };

    return (
        <div className="todo">

            <Modal open={open} onClose={e => setOpen(false)} className="todo__modal">
                <div className={classes.paper}>
                    <h3>update todo</h3>
                    <form>
                        <FormControl>
                            <Input placeholder={props.todo} value={input} onChange={e => setInput(e.target.value)} />
                            <Button type="submit" disabled={!input} variant="contained" color="primary" size="sm" className="todo__updateBtn">update</Button>
                        </FormControl>
                    </form>
                </div>
            </Modal>


            <Grid container justify="center" className="todo__list">
                <Grid item xs={10} sm={10} md={8} lg={8}>
                    <Paper className="">
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={props.todo}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" color="primary" aria-label="edit" onClick={handleOpen}>
                                        <EditOutlinedIcon />
                                    </IconButton>
                                    <IconButton edge="end" color="secondary" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Todo
