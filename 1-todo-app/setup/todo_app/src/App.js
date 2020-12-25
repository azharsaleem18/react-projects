import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Appbar from './Appbar';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core'

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <Appbar />
      <div>
      <Grid container spacing={3} justify="center" className="App__grid">
        <Grid item xs={8} sm={8} md={6} lg={4}>
          <form>
            <TextField
              label="create todo"
              variant="outlined"
              size="small"
              value={input}
              onChange={e => setInput(e.target.value)} />
            <Button type="submit" variant="contained" className="App__submit">SAVE</Button>
          </form>
        </Grid>
      </Grid>
      </div>

        <Todo todo="Learn React Js" />
        <Todo todo="Read Book" />
        <Todo todo="Complete projects" />
    </div>
  );
}

export default App;
