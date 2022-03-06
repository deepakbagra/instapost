import React, { useState, useEffect } from 'react';
import { Paper, Button, Typography, TextField } from '@material-ui/core';
import useStyle from './Styles';
import io from 'socket.io-client';
import ChatBox from './ChatBox';

const ENDPOINT = 'localhost:9000';

const socket = io.connect(ENDPOINT);

const user = JSON.parse(localStorage.getItem('profile'));
const name = user?.result?.name;

const ChatPage = (props) => {
  
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const classes = useStyle();  
  
  const joinRoom = () => {
    if (name !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
      
    }
  }

  return (
    <div >
      {!showChat ? (
        <Paper className={classes.paper}>
          <Typography variant='body2'>Join A Chat</Typography>
          <TextField className={classes.input} size='small'
            name='room'
            label='Room'
            variant='outlined'
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 0.9em' }}>
            <Button color='primary'
              onClick={joinRoom}
              style={{ size: '1em', textTransform: 'none' }} >
              Join Room
            </Button>
            <Button color='secondary'
              style={{ size: '1em', textTransform: 'none' }}
              onClick={props.handleModalCloseChat}>
              Close
            </Button>
          </div>
        </Paper>
      )
        : (
          <ChatBox socket={socket} room={room} name={name} onClick={props.handleModalCloseChat} />
        )
      }
      
    </div>  
     
  )
}

export default ChatPage;

