import React from 'react';
import './App.css';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AddIcon from '@material-ui/icons/Add';
import Post from './components/Post';


function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImgae"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          height="45px"
          alt="Logo" />
        <div>
          <Fab variant="extended" size="small" color="primary" className="app__signinBtn">
            <LockOpenOutlinedIcon fontSize="small" /> SIGN IN
          </Fab>
          <Fab variant="extended" size="small" color="secondary">
            <PersonAddOutlinedIcon fontSize="small" /> SIGN UP
          </Fab>
        </div>
      </div>

      <Post />
    </div>
  );
}

export default App;
