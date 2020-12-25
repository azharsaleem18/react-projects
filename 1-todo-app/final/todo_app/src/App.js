import React, { useState, useEffect } from 'react';
import './App.css';
import Appbar from './Appbar';
import Todo from './Todo';
import db from './firebase';
import { Grid, TextField, Button } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => { 
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id, todo:doc.data().todo})))
    })
  }, []);

  const createTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input
    });
    setInput('');
  };


  return (
    <div className="App">
      <Appbar />

      <Grid container spacing={3} justify="center" className="App__grid">
        <Grid item xs={8} sm={8} md={4} lg={4}>
          <TextField
            label="create todo"
            variant="outlined"
            size="small"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Button disabled={!input} type="submit" variant="contained" className="App_submitBtn" onClick={createTodo}>SAVE</Button>
        </Grid>
      </Grid>

      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
      

    </div>
  );
}

export default App;
