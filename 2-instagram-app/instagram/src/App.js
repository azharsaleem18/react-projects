import React, { useState, useEffect } from 'react';
import './App.css';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField, Button } from '@material-ui/core';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AddIcon from '@material-ui/icons/Add';
import LockIcon from '@material-ui/icons/Lock';
import Post from './components/Post';
import { auth } from './firebase';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);


  useEffect(() => { 
    const setuserprofile = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
    return () => {
      setuserprofile();
    }
  }, [user, username]);

  const handleSignup = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch(err => alert(err.message));
    
    setUsername('');
    setEmail('');
    setPassword('');
    setOpen(false);
  }

  const handleSignin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => alert(error.message));
    
    setEmail('');
    setPassword('');
    setOpenSignin(false);
  }

  return (
    <div className="app">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="app__headerImgae"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              height="30px"
              alt="Logo" />
          </center>
          <form className="app__siginForm" onSubmit={handleSignup}>
            <TextField
              label="username"
              variant="outlined"
              size="small"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="app__formField" />
            <TextField
              label="email"
              variant="outlined"
              size="small"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="app__formField"
            />
            <TextField
              label="password"
              variant="outlined"
              size="small"
              name="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="app__formField"
            />
            <Button type="submit" variant="contained" color="primary">Sign up</Button>
          </form>
        </div>
      </Modal>


      <Modal
        open={openSignin}
        onClose={() => setOpenSignin(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="app__headerImgae"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
              height="30px"
              alt="Logo" />
          </center>
          <form className="app__siginForm" onSubmit={handleSignin}>
            <TextField
              label="email"
              variant="outlined"
              size="small"
              name="email"
              className="app__formField"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              label="password"
              variant="outlined"
              size="small"
              name="password"
              type="password"
              className="app__formField"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">Sign in</Button>
          </form>
        </div>
      </Modal>


      <div className="app__header">
        <img
          className="app__headerImgae"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          height="45px"
          alt="Logo" />
        <div>
          {user ? (
            <div>
              <Fab variant="extended" size="small" color="secondary" onClick={() => auth.signOut()}>
               <LockIcon fontSize="small" /> Logout
             </Fab>
            </div>
          ) : (
             <div>
             <Fab variant="extended" size="small" color="primary" className="app__signinBtn" onClick={() => setOpenSignin(true)}>
               <LockOpenOutlinedIcon fontSize="small" /> SIGN IN
             </Fab>
             <Fab variant="extended" size="small" color="secondary" onClick={() => setOpen(true)}>
               <PersonAddOutlinedIcon fontSize="small" /> SIGN UP
             </Fab>
           </div>
          )}
        </div>
      </div>

      <Post />
    </div>
  );
}

export default App;
